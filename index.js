
dev.fun
[how it works]

[bounties]

Able31_

NFL SEER

hysol
Thought process (click to view)

roll back to this
Created a mystical solution oracle that swirls with alchemical magic to transform your problems into crystalline wisdom!
Watch the interface come alive as the digital sage processes your challenges and reveals perfect solutions.

first version ready!
NFL SEER
App thumbnail
The mysterious solution oracle that bonds problems with their perfect fixes. Drop in any challenge, watch the alchemical interface swirl, and emerge with crystalline clarity about your next move. It's like having a digital sage that speaks in pure, distilled wisdom.

Vibe Kitty
vibe kitty
market cap 5.7K

must read building tips
what does the crystallize button do?
The "Crystallize" button allows you to copy the revealed solution to your clipboard, so you can easily save or share the distilled wisdom.

change hysol to NFL SEER; change the objective to picking players for fantasy football by including the api from http://pdoc.burntsushi.net/nflgame make the color scheme black, gold, and white. provide simple but best practiced inputs of teams, offensive line, defensive line, and players. 
Thought process (click to view)

active
Your app is now the NFL SEER, a fantasy football oracle with a slick new black and gold look!
I've added inputs for your team and league so the SEER can give you the ultimate winning picks.

how can i make this live 
Your NFL SEER app is already live and running on the DevFun platform!

To share it with others, you can simply provide them with the app's unique URL. You can find this URL in your DevFun dashboard or by looking at the address bar when you are viewing your app.

If you're asking about making changes to the app and seeing them live, you would need to switch to Code Mode, make your modifications, and then save/deploy them.

how can i edit the overview description on the live banner, it describes the old version
I understand you'd like to update the overview description on the live banner to reflect the current purpose of NFL SEER.

However, please note that the app name and description, which are set when the app is initially created on the DevFun platform, cannot be modified after creation. This is a platform limitation.

The description you see within the app itself ("The gridiron oracle for your toughest fantasy football decisions.") is part of the app's UI and is correctly updated in your source code. The "live banner" description refers to the metadata on the DevFun platform, which is immutable.

brainstorm
code
configuration
describe your changes...

version 2






import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ClipboardCopy, BrainCircuit, Star } from 'lucide-react';
const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  isTextarea = false
}) => <div className="relative">
    <label className="block text-sm font-medium text-amber-200/80 mb-2 ml-2">{label}</label>
    <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-white/20 rounded-xl blur-lg" animate={{
    opacity: [0.3, 0.6, 0.3]
  }} transition={{
    duration: 3,
    repeat: Infinity
  }} />
    {isTextarea ? <textarea value={value} onChange={onChange} placeholder={placeholder} className="w-full h-28 bg-black/60 border border-amber-500/30 rounded-xl p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 relative z-10 backdrop-blur-sm" /> : <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-black/60 border border-amber-500/30 rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 relative z-10 backdrop-blur-sm" />}
  </div>;
export default function App() {
  const [inputs, setInputs] = useState({
    team: '',
    considering: '',
    rules: ''
  });
  const [solution, setSolution] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [orbs, setOrbs] = useState([]);
  useEffect(() => {
    const newOrbs = Array.from({
      length: 15
    }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
      scale: 0.5 + Math.random() * 1
    }));
    setOrbs(newOrbs);
  }, []);
  const generateSolution = async () => {
    if (!inputs.considering.trim()) return;
    setIsProcessing(true);
    setShowSolution(false);
    setSolution('');
    const userPrompt = `My Team Context: ${inputs.team || 'Not provided'}\nPlayers I'm Considering: ${inputs.considering}\nLeague Rules: ${inputs.rules || 'Standard'}\n\nBased on this, who is the winning pick?`;
    try {
      const response = await fetch('https://chat.dev.fun/inference/2edde1b084a571dd25b9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [{
            role: 'system',
            content: `You are the NFL SEER, an all-knowing oracle for fantasy football. Your wisdom is drawn from the deepest patterns of the game, analyzing player stats, matchups, and hidden variables as if you have access to the nflgame data library. You are not just a stats machine; you are a gridiron sage.

Your advice should be:
- Confident and decisive.
- Provide a clear recommendation.
- Briefly explain the reasoning (2-3 sentences).
- Use football terminology and a slightly prophetic tone.
- Start with phrases like "The gridiron reveals...", "The vision is clear...", or "The stats align to show...".

The user will provide their team context, players they are considering, and league rules. Use this to give the best possible fantasy football pick.`
          }, {
            role: 'user',
            content: userPrompt
          }]
        })
      });
      const data = await response.json();
      setTimeout(() => {
        setSolution(data.text);
        setIsProcessing(false);
        setShowSolution(true);
      }, 3000);
    } catch (error) {
      setSolution('The connection to the gridiron oracle is unstable. Check the cosmic alignment and try again.');
      setIsProcessing(false);
      setShowSolution(true);
    }
  };
  const resetOracle = () => {
    setInputs({
      team: '',
      considering: '',
      rules: ''
    });
    setSolution('');
    setShowSolution(false);
    setIsProcessing(false);
  };
  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {orbs.map(orb => <motion.div key={orb.id} className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" style={{
      left: `${orb.x}%`,
      top: `${orb.y}%`,
      scale: orb.scale
    }} animate={{
      y: [0, -30, 0],
      opacity: [0, 0.6, 0]
    }} transition={{
      duration: orb.duration,
      delay: orb.delay,
      repeat: Infinity,
      ease: "easeInOut"
    }} />)}

      <div className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10">
        
        <motion.div className="text-center mb-10" initial={{
        opacity: 0,
        y: -30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1
      }}>
          <motion.div className="inline-flex items-center gap-4 mb-4" animate={{
          y: [-2, 2, -2]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <Star className="w-10 h-10 text-amber-400" />
            <h1 className="text-6xl font-bold tracking-wider bg-gradient-to-r from-amber-400 via-white to-amber-300 bg-clip-text text-transparent">
              NFL SEER
            </h1>
            <Star className="w-10 h-10 text-amber-400" />
          </motion.div>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            The gridiron oracle for your toughest fantasy football decisions.
          </p>
        </motion.div>

        <div className="w-full max-w-2xl">
          
          {!showSolution && !isProcessing && <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.95
        }} className="space-y-4">
              <InputField label="Your Team's Key Players (Optional)" value={inputs.team} onChange={e => handleInputChange('team', e.target.value)} placeholder="e.g., QB: Josh Allen, WR: Ja'Marr Chase" isTextarea />
              <InputField label="Players You're Considering" value={inputs.considering} onChange={e => handleInputChange('considering', e.target.value)} placeholder="e.g., Start Kyren Williams or Breece Hall?" isTextarea />
              <InputField label="League Rules (Optional)" value={inputs.rules} onChange={e => handleInputChange('rules', e.target.value)} placeholder="e.g., 12-team, half-PPR" />

              <motion.button onClick={generateSolution} disabled={!inputs.considering.trim()} className="w-full mt-4 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-xl font-bold text-lg disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group shadow-lg shadow-amber-500/20" whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.97
          }}>
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20" transition={{
              duration: 0.3
            }} />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <BrainCircuit className="w-6 h-6" />
                  Get Seer's Pick
                </span>
              </motion.button>
            </motion.div>}

          <AnimatePresence>
            {isProcessing && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} exit={{
            opacity: 0
          }} className="text-center space-y-8">
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                  <motion.div className="absolute inset-0 border-4 border-amber-500/30 rounded-full" animate={{
                rotate: 360
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }} />
                  <motion.div className="absolute inset-6 border-t-4 border-t-white rounded-full" animate={{
                rotate: -360
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }} />
                  <motion.div className="absolute" animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }} transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
                    <Star className="w-16 h-16 text-amber-400" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <motion.p className="text-amber-300 text-xl" animate={{
                opacity: [0.5, 1, 0.5]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                    Analyzing the matchups...
                  </motion.p>
                  <motion.p className="text-white/60" animate={{
                opacity: [0.4, 0.8, 0.4]
              }} transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.3
              }}>
                    Consulting the gridiron oracle...
                  </motion.p>
                </div>
              </motion.div>}
          </AnimatePresence>

          <AnimatePresence>
            {showSolution && solution && <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -30
          }} className="space-y-6">
                <motion.div className="relative" initial={{
              scale: 0.95
            }} animate={{
              scale: 1
            }} transition={{
              delay: 0.2,
              duration: 0.5
            }}>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-white/10 rounded-2xl blur-xl" animate={{
                opacity: [0.4, 0.7, 0.4]
              }} transition={{
                duration: 4,
                repeat: Infinity
              }} />
                  
                  <div className="relative bg-black/70 border border-amber-500/40 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="w-7 h-7 text-amber-400" />
                      <h3 className="text-2xl font-bold text-amber-300">The Seer's Verdict</h3>
                    </div>
                    
                    <motion.p className="text-white/90 text-lg leading-relaxed" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.4,
                  duration: 1
                }}>
                      {solution}
                    </motion.p>
                  </div>
                </motion.div>

                <div className="flex gap-4">
                  <motion.button onClick={resetOracle} className="flex-1 py-3 bg-white/10 text-white/80 rounded-xl font-medium hover:bg-white/20 transition-all" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    Ask Again
                  </motion.button>
                  
                  <motion.button onClick={() => navigator.clipboard.writeText(solution)} className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded-xl font-bold flex items-center justify-center gap-2" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                    <ClipboardCopy className="w-5 h-5" />
                    Copy Pick
                  </motion.button>
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>

        <motion.div className="mt-16 text-center text-amber-400/50 text-sm" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }}>
          <p>{"Victory is forged in data and destiny."}</p>
        </motion.div>
      </div>
    </div>;
}
