import React from 'react';
import { ArrowRight, BookOpen, Brain, Terminal } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-8">
        <Brain className="w-12 h-12 text-blue-600" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
        Prova Técnica: Engenharia de Dados e IA
      </h1>
      
      <p className="text-lg text-slate-600 max-w-2xl mb-12">
        Esta não é uma avaliação superficial. Vamos medir o seu nível real de conhecimento em lógica, fundamentos de dados, SQL e Python para entender o seu momento atual na área.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12 text-left">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
          <BookOpen className="w-6 h-6 text-indigo-500 mb-4" />
          <h3 className="font-semibold text-slate-900 mb-2">20 Questões Reais</h3>
          <p className="text-sm text-slate-500">Múltipla escolha cobrando cenários do dia a dia da área de dados.</p>
        </div>
        
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
          <Terminal className="w-6 h-6 text-emerald-500 mb-4" />
          <h3 className="font-semibold text-slate-900 mb-2">Avaliação Técnica</h3>
          <p className="text-sm text-slate-500">Nota técnica baseada no seu desempenho (0 a 20 pontos).</p>
        </div>
        
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
          <Brain className="w-6 h-6 text-amber-500 mb-4" />
          <h3 className="font-semibold text-slate-900 mb-2">Plano de Carreira</h3>
          <p className="text-sm text-slate-500">Recomendação de próximos passos e faixa salarial condizente.</p>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        <span>Iniciar Prova Técnica</span>
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
