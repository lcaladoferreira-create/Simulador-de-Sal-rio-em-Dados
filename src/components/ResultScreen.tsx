import React from 'react';
import { Outcome } from '../data';
import { Trophy, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ResultScreenProps {
  score: number;
  total: number;
  outcome: Outcome;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, outcome }) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <motion.div 
      className="max-w-3xl mx-auto px-6 py-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
          <Trophy className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Avaliação Concluída</h2>
        <div className="text-xl text-slate-600 font-medium">
          Sua nota: <span className="text-emerald-600 font-bold">{score}</span> de {total} ({percentage}%)
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden mb-10">
        <div className="bg-slate-900 p-8 text-white">
          <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Seu Nível Atual
          </div>
          <h1 className="text-3xl font-bold mb-4">{outcome.title}</h1>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full">
            <span className="text-sm">Faixa Salarial Estimada: </span>
            <span className="ml-2 font-bold text-emerald-400">{outcome.salaryRange}</span>
          </div>
        </div>
        
        <div className="p-8 md:p-10">
          <div className="text-lg text-slate-700 whitespace-pre-wrap leading-relaxed">
             {outcome.text}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-3xl p-8 md:p-10 border border-blue-100 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Próximos Passos</h3>
        <p className="text-slate-600 mb-8 max-w-xl">
          Use seu resultado como alavanca. O plano recomendado abaixo é o melhor caminho para o seu patamar técnico atual.
        </p>
        
        <a 
          href={outcome.ctaLink}
          className="group w-full md:w-auto inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white transition-all bg-blue-600 rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {outcome.ctaText}
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
        <span className="mt-4 text-sm font-medium text-slate-500 uppercase tracking-wider">{outcome.planName}</span>
      </div>
    </motion.div>
  );
};
