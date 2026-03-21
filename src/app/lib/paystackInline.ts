let scriptPromise: Promise<void> | null = null;

type SetupConfig = {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  plan: string;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
};

type PaystackHandler = {
  openIframe: () => void;
};

type PaystackStatic = {
  setup: (config: SetupConfig) => PaystackHandler;
};

declare global {
  interface Window {
    PaystackPop?: PaystackStatic;
  }
}

const ensureScript = async () => {
  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load Paystack script"));
    document.body.appendChild(script);
  });

  return scriptPromise;
};

export const openPaystackInline = async (config: SetupConfig) => {
  await ensureScript();
  if (!window.PaystackPop) {
    throw new Error("Paystack popup not available");
  }

  const handler = window.PaystackPop.setup(config);
  handler.openIframe();
};
