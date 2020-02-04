const scriptTag = document.createElement("script")
scriptTag.src = browser.extension.getURL("inject.js")
document.body.appendChild(scriptTag)
