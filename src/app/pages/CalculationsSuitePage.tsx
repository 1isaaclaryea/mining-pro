import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Alert, AlertDescription } from "../components/ui/alert";
import { useAuth } from "../auth/AuthContext";
import { type ModuleCode } from "../lib/authApi";
import { paymentsApi } from "../lib/paymentsApi";
import sagMillImage from "../../assets/32219f7f656f576ccd950e5f4a055779530640a4.png";
import sagMillResultImage from "../../assets/0f9f38c59801f3ae74cbe2797e0e22109ca09da0.png";
import calcLogoImage from "../../assets/aef85ff4ad46a975a6c9df202364d28d45a23c17.png";

type CalculationResults = {
  heightOfTriangle: number;
  areaOfTriangle: number;
  areaOfSector: number;
  areaOfSegment: number;
  areaOfCircle: number;
  percentageBallCharge: number;
};

type ActiveTool =
  | "home"
  | "ball-charge"
  | "power-wear-insights"
  | "throughput"
  | "power-draw"
  | "liner-wear";
type PaidModuleCode = "power-wear-insights" | "throughput" | "power-draw" | "liner-wear";

function BallChargeCalculator({
  onBack,
  title = "Percentage Ball Charge Calculator",
}: {
  onBack: () => void;
  title?: string;
}) {
  const [stage, setStage] = useState<1 | 2>(1);
  const [chordLength, setChordLength] = useState("");
  const [radius, setRadius] = useState("");
  const [centralAngle, setCentralAngle] = useState("");
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = (): CalculationResults => {
    const Y = parseFloat(chordLength);
    const R = parseFloat(radius);
    const theta = parseFloat(centralAngle);

    const H = Math.sqrt(R ** 2 - (Y / 2) ** 2);           // Step 1: Height of triangle
    const A = 0.5 * H * Y;                                 // Step 2: Area of triangle
    const As = (R ** 2 * theta * 3.142) / 360;             // Step 3: Area of sector
    const Asg = As - A;                                     // Step 4: Area of segment
    const Ac = 3.14 * R ** 2;                               // Step 5: Area of circle
    const percentageBallCharge = (Asg / Ac) * 100;         // Step 6: % Ball charge

    return {
      heightOfTriangle: parseFloat(H.toFixed(4)),
      areaOfTriangle: parseFloat(A.toFixed(4)),
      areaOfSector: parseFloat(As.toFixed(4)),
      areaOfSegment: parseFloat(Asg.toFixed(4)),
      areaOfCircle: parseFloat(Ac.toFixed(4)),
      percentageBallCharge: parseFloat(percentageBallCharge.toFixed(2)),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedResults = calculateResults();
    setResults(calculatedResults);
    setStage(2);
  };

  const handleReset = () => {
    setStage(1);
    setChordLength("");
    setRadius("");
    setCentralAngle("");
    setResults(null);
  };

  const handleBack = () => {
    if (stage === 2) {
      setStage(1);
    } else {
      onBack();
    }
  };

  const isFormValid = chordLength && radius && centralAngle;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sub-header */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto px-10 sm:px-16 py-4 sm:py-5">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 -ml-2"
                onClick={handleBack}
              >
                <ArrowLeft className="size-4 mr-1" />
                <span className="text-sm">Back</span>
              </Button>
              <img src={calcLogoImage} alt="Logo" className="w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  {title}
                </h2>
                <p className="text-xs text-gray-500">SAG Mill Analysis</p>
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <div
                      className={`flex items-center justify-center size-7 rounded-full border-2 transition-all ${
                        s === stage
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : s < stage
                            ? "border-green-600 bg-green-50 text-green-600"
                            : "border-gray-300 bg-white text-gray-400"
                      }`}
                    >
                      {s < stage ? (
                        <CheckCircle2 className="size-3.5" />
                      ) : (
                        <span className="text-xs font-medium">{s}</span>
                      )}
                    </div>
                    {s < 2 && (
                      <div
                        className={`h-px w-4 ${s < stage ? "bg-green-600" : "bg-gray-300"}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={handleBack}
              >
                <ArrowLeft className="size-4 mr-2" />
                Back
              </Button>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-3">
                <img src={calcLogoImage} alt="Logo" className="w-24" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-500">SAG Mill Analysis</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`flex items-center justify-center size-8 rounded-full border-2 transition-all ${
                      s === stage
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : s < stage
                          ? "border-green-600 bg-green-50 text-green-600"
                          : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    {s < stage ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      <span className="text-sm font-medium">{s}</span>
                    )}
                  </div>
                  {s < 2 && (
                    <div
                      className={`h-px w-8 ${s < stage ? "bg-green-600" : "bg-gray-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-10 sm:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Visualization */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Info className="size-5 text-blue-600" />
                  SAG Mill Visualization
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Cross-section view showing ball charge measurement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden bg-white">
                  <img
                    src={stage === 1 ? sagMillImage : sagMillResultImage}
                    alt="SAG Mill Cross Section"
                    className="w-[140%] sm:w-full h-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {stage === 1 && (
              <Alert className="border-blue-200 bg-blue-50 text-blue-900">
                <Info className="size-4 text-blue-600" />
                <AlertDescription className="text-sm text-blue-800">
                  Enter the three chord length measurements from your SAG mill.
                  These measurements are taken at different positions to
                  calculate the ball charge percentage accurately.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Right Column - Input/Results */}
          <div className="lg:col-span-1 space-y-6">
            {stage === 1 && (
              <Card className="border-gray-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900">
                    Step 1: Mill Measurements
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Enter the chord length, radius, and central angle
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="chord-y" className="text-gray-700">
                          Length of Chord (Y) — m
                        </Label>
                        <Input
                          id="chord-y"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={chordLength}
                          onChange={(e) => setChordLength(e.target.value)}
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="radius" className="text-gray-700">
                          Radius R — m
                        </Label>
                        <Input
                          id="radius"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={radius}
                          onChange={(e) => setRadius(e.target.value)}
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="central-angle" className="text-gray-700">
                          Central Angle (θ) — °
                        </Label>
                        <Input
                          id="central-angle"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={centralAngle}
                          onChange={(e) => setCentralAngle(e.target.value)}
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={!isFormValid}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                      >
                        Calculate Results
                        <ArrowRight className="size-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {stage === 2 && results && (
              <>
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-gray-900">
                      Step 2: Calculation Results
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Complete analysis of your SAG mill ball charge
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="size-2 rounded-full bg-blue-600" />
                        <span className="text-xs text-gray-600 uppercase tracking-wide font-medium">
                          Primary Result
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {results.percentageBallCharge}%
                      </div>
                      <div className="text-sm text-gray-600">
                        Percentage Ball Charge
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600 uppercase tracking-wide font-medium mb-3">
                        Intermediate Calculations
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Height of Triangle (H)</span>
                        <span className="text-gray-900 font-medium">
                          {results.heightOfTriangle} m
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Triangle (A)</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfTriangle} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Sector (As)</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfSector} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Segment (Asg)</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfSegment} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Circle (Ac)</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfCircle} m²
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex gap-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    onClick={handleReset}
                  >
                    New Calculation
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalculationsHome({
  onSelectTool,
  onSubscribe,
  isModuleActive,
  submittingModuleCode,
  message,
}: {
  onSelectTool: (tool: ActiveTool) => void;
  onSubscribe: (moduleCode: PaidModuleCode) => Promise<void>;
  isModuleActive: (moduleCode: ModuleCode) => boolean;
  submittingModuleCode: PaidModuleCode | null;
  message: string | null;
}) {
  const calculations = [
    {
      id: "ball-charge" as ActiveTool,
      title: "Percentage Ball Charge",
      description:
        "Calculate the percentage ball charge of SAG (Semi-Autogenous Grinding) mills",
      icon: Calculator,
      available: true,
      free: true,
    },
    {
      id: "power-wear-insights" as ActiveTool,
      title: "Power & Wear Insights",
      description: "Advanced monitoring for power draw behavior and liner wear insights.",
      icon: Calculator,
      available: true,
      free: false,
      price: "GHS 700/mo",
    },
    {
      id: "power-draw" as ActiveTool,
      title: "Power Draw Calculation",
      description: "Calculate power consumption and efficiency metrics",
      icon: Calculator,
      available: false,
      free: false,
      price: "GHS 700/mo",
    },
    {
      id: "liner-wear" as ActiveTool,
      title: "Liner Wear Analysis",
      description: "Monitor and predict liner wear patterns",
      icon: Calculator,
      available: false,
      free: false,
      price: "GHS 700/mo",
    },
    {
      id: "throughput" as ActiveTool,
      title: "Mill Throughput Analysis",
      description: "Analyze and optimize mill throughput performance",
      icon: Calculator,
      available: false,
      free: false,
      price: "GHS 700/mo",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MET Modules</h1>
          <p className="text-lg text-white/80">Professional-grade metallurgical engineering tools</p>
        </div>
      </section>

      {/* Stat Strip */}
      <div className="bg-primary border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <div className="py-6 px-4 text-center">
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-sm text-white/70 mt-1">Active Module</div>
            </div>
            <div className="py-6 px-4 text-center">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-white/70 mt-1">Coming Soon</div>
            </div>
            <div className="py-6 px-4 text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm text-white/70 mt-1">To Start</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Available Modules</h2>
            <p className="text-muted-foreground">Select a module to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculations.map((calc) => (
              <div
                key={calc.id}
                className={`group ${calc.available ? "cursor-pointer" : "opacity-75"}`}
                onClick={() => {
                  if (!calc.free && calc.available && isModuleActive(calc.id as ModuleCode)) {
                    onSelectTool(calc.id);
                    return;
                  }
                  if (calc.available && calc.free) {
                    onSelectTool(calc.id);
                  }
                }}
              >
                <div
                  className={`h-full bg-white p-8 rounded-lg border border-border transition-all duration-200 ${
                    calc.available
                      ? "border-l-4 border-l-primary hover:shadow-lg hover:-translate-y-1"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-lg ${
                        calc.available
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <calc.icon className="size-6" />
                    </div>
                    {calc.available && (
                      <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{calc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{calc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {calc.free ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                        Free
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                        Paid
                      </span>
                    )}
                    {!calc.available && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {!calc.free && (
                    <div className="mt-4 space-y-2">
                      <div className="text-sm font-semibold text-foreground">{calc.price}</div>
                    {isModuleActive(calc.id as ModuleCode) ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                          Active subscription
                        </span>
                      ) : (
                        <Button
                          className="w-full"
                          disabled={
                            !calc.available ||
                            submittingModuleCode === (calc.id as PaidModuleCode)
                          }
                          onClick={(event) => {
                            event.stopPropagation();
                            if (!calc.available) {
                              return;
                            }
                            onSubscribe(calc.id as PaidModuleCode);
                          }}
                        >
                          {submittingModuleCode === (calc.id as PaidModuleCode)
                            ? "Opening checkout..."
                            : "Subscribe"}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {message && (
            <div className="mt-6 text-center text-sm text-primary">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CalculationsSuitePage() {
  const { accessToken, user, isAuthenticated, refresh } = useAuth();
  const [activeTool, setActiveTool] = useState<ActiveTool>("home");
  const [submittingModuleCode, setSubmittingModuleCode] = useState<PaidModuleCode | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const activeModules = useMemo(() => {
    const active = new Set<ModuleCode>(["ball-charge"]);
    if (user?.role === "ADMIN") {
      active.add("power-wear-insights");
      active.add("throughput");
      active.add("power-draw");
      active.add("liner-wear");
      return active;
    }

    for (const subscription of user?.moduleSubscriptions || []) {
      if (subscription.status === "ACTIVE") {
        active.add(subscription.moduleCode);
      }
    }

    return active;
  }, [user]);

  const handleSubscribe = async (moduleCode: PaidModuleCode) => {
    if (!isAuthenticated || !accessToken) {
      setMessage("Please log in to continue with payment.");
      return;
    }

    setSubmittingModuleCode(moduleCode);
    setMessage(null);
    try {
      const initialized = await paymentsApi.initialize(accessToken, moduleCode);
      if (initialized.bypass) {
        await refresh();
        setMessage("Module access is already active.");
        return;
      }

      if (
        !initialized.publicKey ||
        !initialized.email ||
        !initialized.amountMinor ||
        !initialized.currency ||
        !initialized.reference ||
        !initialized.planCode
      ) {
        throw new Error("Invalid payment initialization response");
      }

      if (!initialized.authorizationUrl) {
        throw new Error("Invalid payment initialization response");
      }

      setMessage("Redirecting to secure checkout...");
      window.location.assign(initialized.authorizationUrl);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to start checkout.");
    } finally {
      setSubmittingModuleCode(null);
    }
  };

  if (activeTool === "ball-charge") {
    return (
      <BallChargeCalculator
        onBack={() => setActiveTool("home")}
        title="Percentage Ball Charge Calculator"
      />
    );
  }

  if (activeTool === "power-wear-insights") {
    return (
      <BallChargeCalculator
        onBack={() => setActiveTool("home")}
        title="Power & Wear Insights Calculator"
      />
    );
  }

  return (
    <CalculationsHome
      onSelectTool={setActiveTool}
      onSubscribe={handleSubscribe}
      isModuleActive={(moduleCode) => activeModules.has(moduleCode)}
      submittingModuleCode={submittingModuleCode}
      message={message}
    />
  );
}
