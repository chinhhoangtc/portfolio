// ----------------------------------------------------------------------

export type LanguageValue =
  | "en"
  | "fr"
  | "vi"
  | "zh"
  | "ar"
  | "th"
  | "ms"
  | "ko"
  | "tr"
  | "id";

export const fallbackLng = "en";
export const languages = [
  "en",
  "fr",
  "vi",
  "zh",
  "ar",
  "th",
  "ms",
  "ko",
  "tr",
  "id",
];
export const defaultNS = "common";
export const cookieName = "i18next";

// ----------------------------------------------------------------------

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

// ----------------------------------------------------------------------

export const changeLangMessages: Record<
  LanguageValue,
  { success: string; error: string; loading: string }
> = {
  en: {
    success: "Language has been changed!",
    error: "Error changing language!",
    loading: "Loading...",
  },
  ko: {
    success: "언어가 변경되었습니다!",
    error: "언어 변경 중 오류가 발생했습니다!",
    loading: "로딩 중...",
  },
  id: {
    success: "Bahasa telah berhasil diubah!",
    error: "Terjadi kesalahan saat mengubah bahasa!",
    loading: "Memuat...",
  },
  tr: {
    success: "Dil değiştirildi!",
    error: "Dil değiştirilirken hata oluştu!",
    loading: "Yükleniyor...",
  },
  vi: {
    success: "Ngôn ngữ đã được thay đổi!",
    error: "Lỗi khi thay đổi ngôn ngữ!",
    loading: "Đang tải...",
  },
  fr: {
    success: "La langue a été changée!",
    error: "Erreur lors du changement de langue!",
    loading: "Chargement...",
  },
  zh: {
    success: "语言已更改！",
    error: "更改语言时出错！",
    loading: "加载中...",
  },
  ar: {
    success: "تم تغيير اللغة!",
    error: "خطأ في تغيير اللغة!",
    loading: "جارٍ التحميل...",
  },
  th: {
    success: "Thay đổi tiếng thái thành công",
    error: "خطأ في تغيير اللغة!",
    loading: "جارٍ التحميل...",
  },
  ms: {
    success: "Berjaya menukar ke Bahasa Melayu",
    error: "Ralat menukar bahasa!",
    loading: "Sedang dimuatkan...",
  },
};
