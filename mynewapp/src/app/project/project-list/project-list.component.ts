import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  projects = [
    {
      id: 1,
      name: 'Mañature, La Guajira',
      year: '2024',
      location: 'La Guajira',
      tag: 'Nutrición y educación alimentaria',
      description: 'Entregamos 270 mercados a familias en situación de vulnerabilidad y desarrollamos un programa de educación alimentaria para padres e hijos.',
      impact: '+270 niños y familias beneficiadas',
      imageClass: 'project-guajira'
    },
    {
      id: 2,
      name: 'Kits escolares en Soacha',
      year: 'Junio 2025',
      location: 'Soacha, Cundinamarca',
      tag: 'Educación y recreación',
      description: 'Entregamos 250 kits escolares y realizamos actividades lúdicas junto a voluntarios.',
      impact: '250 kits escolares entregados',
      imageClass: 'project-soacha'
    },
    {
      id: 3,
      name: 'Navidad con Propósito',
      year: 'Diciembre 2025',
      location: 'Soacha, Cundinamarca',
      tag: 'Ayuda humanitaria',
      description: 'Entregamos 500 mercados, 500 kits escolares, 500 juguetes y más de 500 prendas de vestir.',
      impact: '+500 familias beneficiadas',
      imageClass: 'project-navidad'
    },
    {
      id: 4,
      name: 'Coquí, Nuquí',
      year: '2025 – Actualidad',
      location: 'Nuquí, Chocó',
      tag: 'Educación y liderazgo juvenil',
      description: 'Junto a Mochileros.co, construimos una iniciativa en Nuquí para fortalecer espacios educativos, promover intercambio cultural y abrir nuevas oportunidades.',
      impact: '+100 estudiantes, docentes y familias',
      imageClass: 'project-nuqui'
    },
    {
      id: 5,
      name: 'Córdoba',
      year: '2026',
      location: 'Córdoba',
      tag: 'Respuesta humanitaria',
      description: 'Entregamos mercados, productos de higiene personal y agua potable a comunidades vulnerables.',
      impact: '+400 personas beneficiadas',
      imageClass: 'project-cordoba'
    },
    {
      id: 6,
      name: 'Pragma Radar',
      year: '2025 – Actualidad',
      location: 'Colombia',
      tag: 'Tecnología cívica',
      description: 'Plataforma civic-tech para promover voto informado y veeduría ciudadana con seguimiento tipo semáforo.',
      impact: '+10.000 visualizaciones',
      imageClass: 'project-pragma'
    },
    {
      id: 7,
      name: 'Encuentro de liderazgo político',
      year: '2025',
      location: 'Universidad de los Andes',
      tag: 'Participación ciudadana',
      description: 'Espacio de diálogo con precandidatos, representantes a la Cámara y jóvenes líderes.',
      impact: 'Jóvenes, líderes y actores políticos conectados',
      imageClass: 'project-liderazgo'
    }
  ];
}
