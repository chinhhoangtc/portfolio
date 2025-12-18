// core (MUI)
import { viVN as viVNCore } from "@mui/material/locale";
import {
  enUS as enUSDate,
  viVN as viVNDate,
} from "@mui/x-date-pickers/locales";
// data grid (MUI)
import {
  enUS as enUSDataGrid,
  viVN as viVNDataGrid,
} from "@mui/x-data-grid/locales";

// ----------------------------------------------------------------------

export const allLangs = [
  {
    value: "en",
    label: "English",
    countryCode: "GB",
    adapterLocale: "en",
    numberFormat: { code: "en-US", currency: "USD" },
    systemValue: {
      components: { ...enUSDate.components, ...enUSDataGrid.components },
    },
  },
  {
    value: "vi",
    label: "Tiếng Việt",
    countryCode: "VN",
    adapterLocale: "vi",
    numberFormat: { code: "vi-VN", currency: "VND" },
    systemValue: {
      components: {
        ...viVNCore.components,
        ...viVNDate.components,
        ...viVNDataGrid.components,
      },
    },
  },

];