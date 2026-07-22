import React, { useState } from 'react';
import { 
  Radio, 
  Cloud, 
  Database, 
  BarChart3, 
  Cpu, 
  Server, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code
} from 'lucide-react';

export default function ArchitectureVisualizer() {
  const [activeStage, setActiveStage] = useState('sensor');

  const pipelineStages = [
    {
      id: 'sensor',
      title: '1. IoT Edge Hardware',
      subtitle: 'ESP8266 & Sensors',
      icon: Radio,
      accent: 'emerald',
      protocol: 'Wi-Fi / HTTP / MQTT',
      description: 'Microcontroller collects gas, ultrasonic, and temperature telemetry at 100ms sample rates with local relay threshold control.',
      codeSnippet: `// ESP8266 Hardware Telemetry
float gasLevel = analogRead(MQ2_PIN);
if (gasLevel > THRESHOLD) {
  digitalWrite(RELAY_PIN, HIGH); // Instant sanitization
  sendCloudTelemetry(gasLevel);
}`
    },
    {
      id: 'cloud',
      title: '2. Cloud & Data Lake (AWS Basics)',
      subtitle: 'S3 Storage & Lambda Basics',
      icon: Cloud,
      accent: 'amber',
      protocol: 'AWS Basics / S3 API / IAM',
      description: 'Device telemetry is collected and archived in S3 storage buckets. Basic AWS Lambda functions process and format raw payloads.',
      codeSnippet: `# AWS Basic Lambda Payload Formatter
def lambda_handler(event, context):
    s3.put_object(
        Bucket='prasath-iot-datalake-basic',
        Key=f"telemetry/{event['device_id']}.json",
        Body=json.dumps(event)
    )`
    },
    {
      id: 'analytics',
      title: '3. Data Analytics & Insights',
      subtitle: 'Python, Pandas & SQL',
      icon: BarChart3,
      accent: 'sky',
      protocol: 'Python / Pandas / MySQL',
      description: 'Automated Python ETL scripts clean sensor data, run statistical EDA, and generate visual charts and anomaly reports.',
      codeSnippet: `# Python Pandas EDA & Insight Pipeline
import pandas as pd
df = pd.read_json("telemetry_data.json")
clean_df = df.dropna().query("gas_ppm > 0")
insights = clean_df.groupby("device_id").mean()`
    }
  ];

  const currentInfo = pipelineStages.find(s => s.id === activeStage);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Orbs */}
      <div className="glow-orb-cyan top-1/3 -right-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Data Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            End-to-End <span className="text-gradient-cyan">IoT & Cloud Data Flow</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Click on any stage below to inspect the real-time data streaming pipeline from hardware sensors to Cloud Storage and Python Analytics.
          </p>
        </div>

        {/* Visual Flow Pipeline Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8">
          
          {/* Interactive Pipeline Diagram Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900 border-cyan-400/60 shadow-xl shadow-cyan-950/40 scale-102'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      stage.accent === 'emerald'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : stage.accent === 'amber'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800'
                        : 'bg-sky-950 text-sky-400 border border-sky-800'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono text-slate-500">
                      STAGE 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {stage.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{stage.protocol}</span>
                    {isActive ? (
                      <span className="text-emerald-400 flex items-center gap-1 font-bold">
                        <CheckCircle2 className="w-3 h-3" /> ACTIVE
                      </span>
                    ) : (
                      <span className="text-slate-500">Click to View</span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Detailed Code & Architecture View */}
          <div className="bg-slate-950/90 rounded-xl p-6 border border-slate-800/90 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300 font-bold">
                  {currentInfo.title} Implementation Sample
                </span>
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-md">
                {currentInfo.protocol}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {currentInfo.description}
            </p>

            {/* Code Snippet Box */}
            <div className="relative font-mono text-xs bg-slate-900 rounded-lg p-4 text-sky-300 overflow-x-auto border border-slate-800/90 shadow-inner">
              <pre>{currentInfo.codeSnippet}</pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
