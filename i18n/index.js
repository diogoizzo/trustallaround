const pt = require("./translations.pt.json");
const en = require("./translations.en.json");
const es = require("./translations.es.json");

const i18n = {
    translations: {
        pt,
        en,
        es,
    },
    defaultLang: "pt",
    useBrowserDefault: true,
    languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
