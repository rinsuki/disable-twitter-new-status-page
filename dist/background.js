// @ts-check
const blockParams = [
    "s",
    "ref_src",
    "ref_url",
]
browser.webNavigation.onBeforeNavigate.addListener(details => {
    if (details.parentFrameId !== -1) return
    const url = new URL(details.url)
    let changed = false
    for (const param of blockParams) {
        if (url.searchParams.get(param) == null) continue
        changed = true
        url.searchParams.delete(param)
    }
    if (changed) {
        browser.tabs.update(details.tabId, {
            url: url.href,
        })
    }
}, {
    url: [
        { hostEquals: "twitter.com", pathContains: "/status" }
    ]
})