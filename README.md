# <img src="./public/icons/icon-192x192.png" width="6%"> Chrom2e (WIP)

Minimal and isolated secondary web browser for ChromeOS 140+, made use of [Controlled Frame API](https://wicg.github.io/controlled-frame/).

<img src="./screenshot.jpg" width="80%">

## Use cases

Meanwhile Chrom2e is not meant to be a replacement for the main "Google Chrome" web browser in ChromeOS, it's still useful for some cases.

- One wants to use Google products with a different account and a main account at the same time.
- One wants to have a disposable web browser without touching into their main web browser.
- One wants to have a clean and lean user interface for the web browser.

## Downsides

- Chrom2e cannot use any Chrome extension due to how [IWA](https://developer.chrome.com/docs/iwa/introduction) and [Controlled Frame API](https://wicg.github.io/controlled-frame/) was designed.
- Managed ChromeOS device will require a permission from the admin in order to install this app, unless you're on personal device (unmanaged) then can be easily installed. 
