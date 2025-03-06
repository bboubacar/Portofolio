import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import global_fr from "./Translations/fr/global.json";
import global_en from "./Translations/en/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// @ts-ignore
i18next.init({
    interpolation: { escapaValue: true },
    lng: "fr",
    resources: {
        fr: {
            global: global_fr,
        },
        en: {
            global: global_en,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
