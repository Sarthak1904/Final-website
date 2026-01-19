"use client";

import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import { motion } from "framer-motion";

const FeaturePill = () => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-sm mb-6"
    >
        <span className="text-xs font-medium text-black/60 flex items-center gap-1.5 uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Coming soon
        </span>
    </motion.div>
);

const SarthakAiPage = () => {
    const handleSendMessage = (message: string, files?: File[]) => {
        console.log('Message:', message);
        console.log('Files:', files);
    };

    return (
        <div className="flex w-full h-screen justify-center items-center bg-[radial-gradient(125%_125%_at_50%_101%,rgba(245,87,2,1)_10.5%,rgba(245,120,2,1)_16%,rgba(245,140,2,1)_17.5%,rgba(245,170,100,1)_25%,rgba(238,174,202,1)_40%,rgba(202,179,214,1)_65%,rgba(148,201,233,1)_100%)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="p-4 w-[600px] flex flex-col items-center gap-8"
            >
                <div className="flex flex-col items-center">
                    <FeaturePill />
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="flex flex-col items-center text-black font-semibold text-3xl lg:text-4xl tracking-tight text-center leading-[1.6]"
                    >
                        {/* Line 1 */}
                        <div className="flex flex-wrap justify-center items-center gap-x-[0.2em] mb-2">
                            {"Let's see how".split(" ").map((word, i) => (
                                <motion.span
                                    key={`l1-${i}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                className="relative inline-block px-1"
                            >
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-y-[10%] -left-1 -right-1 bg-purple-200/50 -z-10 rounded-sm"
                                />
                                <span className="relative z-10 text-black">Sarthak</span>
                            </motion.span>
                            {"fits into".split(" ").map((word, i) => (
                                <motion.span
                                    key={`l1-end-${i}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>

                        {/* Line 2 */}
                        <div className="flex flex-wrap justify-center items-center gap-x-[0.2em]">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                className="relative inline-block px-1"
                            >
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-y-[10%] -left-1 -right-1 bg-blue-100/50 -z-10 rounded-sm"
                                />
                                <span className="relative z-10 text-black/80">your next project</span>
                            </motion.div>
                        </div>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="w-12 h-[1px] bg-black/10 origin-center mt-8"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-full"
                >
                    <PromptInputBox onSend={handleSendMessage} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SarthakAiPage;
