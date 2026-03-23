import { type ReactNode } from "react";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../../assets/2723739ca054cf2ae611ed627550fcd579cdeb1c.png";
import logoImage from "../../../assets/fd215dcfee7893030ea59d9c628620e5c910acb7.png";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}

const trustPoints = [
  "Purpose-built access to MiningPro MET modules",
  "Engineering-first workflows for metallurgical teams",
  "Secure account access with verification safeguards",
];

export function AuthShell({ eyebrow, title, description, children, footer }: AuthShellProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,166,35,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(49,81,140,0.38),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#07111f_0%,_#10284b_45%,_#08101d_100%)]" />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">
        <section className="relative hidden overflow-hidden lg:flex">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(6,16,31,0.92)_5%,_rgba(21,52,95,0.78)_50%,_rgba(6,16,31,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,166,35,0.16),_transparent_30%),radial-gradient(circle_at_80%_70%,_rgba(255,255,255,0.1),_transparent_28%)]" />

          <div className="relative flex w-full flex-col justify-between px-10 py-10 xl:px-16 xl:py-14">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3 backdrop-blur-md">
              <img src={logoImage} alt="MiningPro Group" className="h-10 w-auto" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">MiningPro Group</p>
                <p className="text-sm text-white/80">Engineering access for MET operations</p>
              </div>
            </div>

            <div className="max-w-xl space-y-7">
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-accent backdrop-blur-md">
                <ShieldCheck className="size-4" />
                Secure Platform Access
              </div>
              <div className="space-y-5">
                <h1 className="text-5xl font-semibold leading-tight text-white xl:text-6xl">
                  Minimal friction. Serious engineering intent.
                </h1>
                <p className="max-w-lg text-lg leading-8 text-white/78">
                  Unlock specialized MET engineering tools through a purpose-built interface designed for mining process optimization and operational excellence.
                </p>
              </div>
              <div className="grid gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-4 text-sm text-white/85 backdrop-blur-md"
                  >
                    <CheckCircle2 className="size-4 flex-none text-accent" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 lg:px-10">
          <div className="absolute inset-0 lg:hidden bg-[radial-gradient(circle_at_top,_rgba(245,166,35,0.14),_transparent_28%),linear-gradient(180deg,_rgba(8,16,29,0.96)_0%,_rgba(15,38,70,0.9)_42%,_rgba(8,16,29,1)_100%)]" />
          <div className="relative z-10 w-full max-w-xl">
            <button
              type="button"
              onClick={handleBack}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>

            <div className="overflow-hidden rounded-[2rem] border border-white/14 bg-white/96 shadow-[0_30px_90px_rgba(1,6,17,0.35)] backdrop-blur-xl">
              <div className="h-1.5 bg-[linear-gradient(90deg,_rgba(245,166,35,1)_0%,_rgba(49,81,140,1)_100%)]" />
              <div className="space-y-8 p-6 text-slate-900 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/75">{eyebrow}</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
                </div>

                <div className="space-y-6">{children}</div>

                <div className="border-t border-slate-200/80 pt-5 text-sm text-slate-600">{footer}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
