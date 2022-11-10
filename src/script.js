const urls = [
    'https://www.yandex.com',
    'https://www.google.com',
    'https://www.bing.com',
    'https://www.yahoo.com',
    'https://www.ask.com',
    'https://www.duckduckgo.com',
    'https://youtube.com',
    'https://www.facebook.com',
    'https://www.twitter.com',
    'https://www.instagram.com',
    'https://www.linkedin.com',
    'https://www.reddit.com',
    'https://www.wikipedia.org',
    'https://www.amazon.com',
    'https://www.ebay.com',
    'https://www.netflix.com',
    'https://www.spotify.com',
    'https://www.apple.com',
    'https://www.microsoft.com',
    'https://www.adobe.com',
    'https://www.cisco.com',
    'https://www.oracle.com',
    'https://www.samsung.com',
    'https://www.tesla.com',
    'https://www.nvidia.com',
    'https://www.intel.com',
    'https://www.amd.com',
    'https://www.nintendo.com',
    'https://kotaku.com',
    'https://www.ign.com',
    'https://www.gamespot.com',
    'https://www.giantbomb.com',
    'https://www.polygon.com',
    'https://www.rockpapershotgun.com',
    'https://www.eurogamer.net',
    'https://www.pcgamer.com',
    'https://www.gamereactor.eu',
    'https://www.gamereactor.se',
    'https://www.gamereactor.dk',
    'https://www.gamereactor.no',
    'https://www.gamereactor.fi',
    'https://www.gamereactor.de',
    'https://www.gamereactor.fr',
    'https://www.gamereactor.it',
    'https://www.gamereactor.es',
    'https://www.gamereactor.pt',
    'https://pcgamer.com',
    'https://www.gamesradar.com',
    'https://www.gamesradar.com/uk',
    'https://www.gamesradar.com/au',
    'https://www.gamesradar.com/au',
    'https://www.gamesradar.com/au',
    'https://www.gamesradar.com/au',
    'https://wow.gamepedia.com',
    'https://www.wowhead.com',
    'https://www.wowdb.com',
    'https://www.wowprogress.com',
    'https://www.wowinterface.com',
    'https://www.wowace.com',
    'https://www.wow-petopia.com',
    'https://wonderhowto.com',
    'https://www.wikihow.com',
    'https://www.instructables.com',
    'https://www.howtogeek.com',
    'https://www.howtoforge.com',
    'https://quora.com',
    'https://zapier.com',
    'https://example.com',
    'https://www.example.com',
    'https://www.example.org',
    'https://www.example.net',
    'https://evil.com/',
    'https://someevil.com/',
    'https://www.someevil.com/',
    'https://www.someevil.org/',
    'https://anime.com/',
    'https://www.anime.com/',
    'https://www.anime.org/',
    'https://www.anime.net/',
    'https://www.anime.ru/',
    'https://www.anime.de/',
    'https://www.anime.fr/',
    'https://www.anime.es/',
    'https://www.anime.it/',
    'https://www.anime.nl/',
    'https://www.anime.pl/',
    'https://www.anime.pt/',
    'https://www.anime.se/',
    'https://www.anime.dk/',
    'https://bing.com//images?FORM=Z9LH',
    'https://bing.com//videos?FORM=Z9LH1',
    'https://bing.com//shop?FORM=Z9LHS4',
    'https://bing.com//maps?FORM=Z9LH2',
    'https://bing.com//search?q=Bing+translate&FORM=TTAHP1',,
    'https://bing.com//news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3',
    'https://bing.com//travel?FORM=TGHPNT',
    'https://bing.com///www.msn.com/?ocid=BHEA000',
    'https://bing.com///www.msn.com/esports?ocid=ESPHUB_BNG_10',
    'https://bing.com///www.takelessons.com/?utm_source=bing&utm_medium=hp&utm_campaign=binghp-live&utm_content=binghplink',
    'https://bing.com///www.msn.com/health?ocid=binghphea',
    'https://bing.com///www.office.com?WT.mc_id=O16_BingHP',
    'https://bing.com///outlook.com/?WT.mc_id=O16_BingHP',
    'https://bing.com///office.live.com/start/Word.aspx?WT.mc_id=O16_BingHP',
    'https://bing.com///office.live.com/start/Excel.aspx?WT.mc_id=O16_BingHP',
    'https://bing.com///office.live.com/start/PowerPoint.aspx?WT.mc_id=O16_BingHP',
    'https://bing.com///www.onenote.com/notebooks?WT.mc_id=O16_BingHP',
    'https://bing.com///sway.office.com?WT.mc_id=O16_BingHP&utm_source=O16Bing&utm_medium=Nav&utm_campaign=HP',
    'https://bing.com///onedrive.live.com/?gologin=1&WT.mc_id=O16_BingHP',
    'https://bing.com///calendar.live.com/?WT.mc_id=O16_BingHP',
    'https://bing.com///outlook.live.com/owa/?path=/people&WT.mc_id=O16_BingHP',
    'https://bing.com/',
    'https://go.microsoft.com/fwlink/?linkid=2127455',
    'https://bing.com//search?q=European+hedgehog&form=hpcapt&filters=HpDate:"20221109_0800"',
    'https://bing.com//th?id=OHR.HedgehogNest_EN-US0590169065_1920x1200.jpg&rf=LaDigue_1920x1200.jpg',
    'https://bing.com//profile/interests?FORM=O2HV45',
    'https://bing.com//set/homepage?PUBL=BINGCOM',
    'https://bing.com/javascript:void(0);',
    'https://bing.com/javascript:void(0)',
    'https://bing.com//rewards/dashboard',
    'https://bing.com//rebates/payouts'
];

const PlayUrls = [
    'play/193497?header=no&is-gametok=1&app-id=193497&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}',
    'play/193057?header=no&is-gametok=1&app-id=193057&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}',
    'play/193742?header=no&is-gametok=1&app-id=193742&is-app-page=1&payload=&flags={"gametok_enabled":true}',
    'play/178898?header=no&is-gametok=1&app-id=178898&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}',
    'play/180071?header=no&is-gametok=1&app-id=180071&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}',
    'play/191205?header=no&is-gametok=1&app-id=191205&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}',
    'play/193277?header=no&is-gametok=1&app-id=193277&is-app-page=1&payload=lvl1&flags={"gametok_enabled":true}'
]

const localHostPlayUrls = PlayUrls.map(url => `https://localhost.igrotok.msup.yandex.ru/${url}`);

const prodPlayUrls = PlayUrls.map(url => `https://yandex.ru/games/${url}`);

const proxyUrls = urls.map(url => `https://localhost:80?url=${url}`);

const generateIframe = url => {
    const iframe = document.createElement('iframe');

    iframe.src = url;
    document.body.appendChild(iframe);
};

const deleteIframes = () => {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => iframe.setAttribute('src', 'about:blank'));

    setTimeout(() => {
        iframes.forEach(iframe => iframe.setAttribute('src', iframe.remove()));
    }, 500);
}


setInterval(() => {
    urls.forEach(generateIframe);
    setTimeout(deleteIframes, 5000);
}, 7000);