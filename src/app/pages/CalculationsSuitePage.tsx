import { useState } from "react";
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
import sagMillImage from "../../assets/32219f7f656f576ccd950e5f4a055779530640a4.png";
import sagMillResultImage from "../../assets/0f9f38c59801f3ae74cbe2797e0e22109ca09da0.png";
import calcLogoImage from "../../assets/aef85ff4ad46a975a6c9df202364d28d45a23c17.png";

type CalculationResults = {
  centralAngle: number;
  areaOfCircle: number;
  areaOfSector: number;
  lengthOfSector: number;
  percentageBallCharge: number;
};

type ActiveTool = "home" | "ball-charge";

function BallChargeCalculator({
  onBack,
}: {
  onBack: () => void;
}) {
  const [stage, setStage] = useState<1 | 2>(1);
  const [cordLength1, setCordLength1] = useState("");
  const [cordLength2, setCordLength2] = useState("");
  const [cordLength3, setCordLength3] = useState("");
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateResults = (): CalculationResults => {
    const c1 = parseFloat(cordLength1);
    const c2 = parseFloat(cordLength2);
    const c3 = parseFloat(cordLength3);

    const radius = (c1 + c2 + c3) / 3;
    const centralAngle = 2 * Math.asin(c1 / (2 * radius)) * (180 / Math.PI);
    const areaOfCircle = Math.PI * radius * radius;
    const areaOfSector = (centralAngle / 360) * areaOfCircle;
    const lengthOfSector = (centralAngle / 360) * 2 * Math.PI * radius;
    const percentageBallCharge = ((c1 * c2) / (radius * radius)) * 25;

    return {
      centralAngle: parseFloat(centralAngle.toFixed(2)),
      areaOfCircle: parseFloat(areaOfCircle.toFixed(2)),
      areaOfSector: parseFloat(areaOfSector.toFixed(2)),
      lengthOfSector: parseFloat(lengthOfSector.toFixed(2)),
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
    setCordLength1("");
    setCordLength2("");
    setCordLength3("");
    setResults(null);
  };

  const handleBack = () => {
    if (stage === 2) {
      setStage(1);
    } else {
      onBack();
    }
  };

  const isFormValid = cordLength1 && cordLength2 && cordLength3;

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
                  Percentage Ball Charge Calculator
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
                    Percentage Ball Charge Calculator
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
                    Step 1: Chord Length Measurements
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Enter the three chord length measurements (in meters)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cord1" className="text-gray-700">
                          Chord Length 1
                        </Label>
                        <Input
                          id="cord1"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={cordLength1}
                          onChange={(e) => setCordLength1(e.target.value)}
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cord2" className="text-gray-700">
                          Chord Length 2
                        </Label>
                        <Input
                          id="cord2"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={cordLength2}
                          onChange={(e) => setCordLength2(e.target.value)}
                          className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cord3" className="text-gray-700">
                          Chord Length 3
                        </Label>
                        <Input
                          id="cord3"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={cordLength3}
                          onChange={(e) => setCordLength3(e.target.value)}
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
                        Additional Calculations
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Central Angle</span>
                        <span className="text-gray-900 font-medium">
                          {results.centralAngle}°
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Circle</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfCircle} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Area of Sector</span>
                        <span className="text-gray-900 font-medium">
                          {results.areaOfSector} m²
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="text-gray-600">Length of Sector</span>
                        <span className="text-gray-900 font-medium">
                          {results.lengthOfSector} m
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
}: {
  onSelectTool: (tool: ActiveTool) => void;
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
      id: "throughput" as ActiveTool,
      title: "Mill Throughput Analysis",
      description: "Analyze and optimize mill throughput performance",
      icon: Calculator,
      available: false,
      free: false,
    },
    {
      id: "power-draw" as ActiveTool,
      title: "Power Draw Calculation",
      description: "Calculate power consumption and efficiency metrics",
      icon: Calculator,
      available: false,
      free: false,
    },
    {
      id: "liner-wear" as ActiveTool,
      title: "Liner Wear Analysis",
      description: "Monitor and predict liner wear patterns",
      icon: Calculator,
      available: false,
      free: false,
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
                className={`group ${!calc.available ? "pointer-events-none opacity-60" : "cursor-pointer"}`}
                onClick={() => calc.available && onSelectTool(calc.id)}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CalculationsSuitePage() {
  const [activeTool, setActiveTool] = useState<ActiveTool>("home");

  if (activeTool === "ball-charge") {
    return (
      <BallChargeCalculator onBack={() => setActiveTool("home")} />
    );
  }

  return <CalculationsHome onSelectTool={setActiveTool} />;
}
