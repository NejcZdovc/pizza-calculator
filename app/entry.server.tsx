import ReactDOMServer from 'react-dom/server'
import type { EntryContext } from 'remix'
import { RemixServer } from 'remix'
import { ServerStyleSheets } from '@material-ui/core'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheets = new ServerStyleSheets()

  let markup = ReactDOMServer.renderToString(
    sheets.collect(<RemixServer context={remixContext} url={request.url} />)
  )

  const markupWithMuiCss = markup.replace(
    '<style id="jss-server-side"></style>',
    `<style id="jss-server-side">${sheets.toString()}</style>`
  )

  return new Response('<!DOCTYPE html>' + markupWithMuiCss, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
    },
  })
}
