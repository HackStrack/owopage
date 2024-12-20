'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function CatalogHeader() {
  return (
    <section className="bg-[#1e293b] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Catálogo de Maquinaria</h1>
        <div className="max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            placeholder="Buscar maquinaria..." 
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
}