import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent {
  project: any;

  projects = [
    {
      id: 1,
      name: 'Mañature, La Guajira',
      year: '2024',
      location: 'La Guajira',
      tag: 'Nutrición y educación alimentaria',
      imageClass: 'project-guajira',
      impact: '+270 niños y familias beneficiadas',
      description: 'Entregamos 270 mercados a familias en situación de vulnerabilidad y desarrollamos un programa de educación alimentaria para padres e hijos, promoviendo hábitos nutricionales y bienestar familiar a largo plazo.'
    },
    {
      id: 2,
      name: 'Kits escolares en Soacha',
      year: 'Junio 2025',
      location: 'Soacha, Cundinamarca',
      tag: 'Educación y recreación',
      imageClass: 'project-soacha',
      impact: '250 kits escolares entregados',
      description: 'Realizamos una jornada educativa y recreativa junto a voluntarios, entregando 250 kits escolares y desarrollando actividades lúdicas.'
    },
    {
      id: 3,
      name: 'Navidad con Propósito',
      year: 'Diciembre 2025',
      location: 'Soacha, Cundinamarca',
      tag: 'Ayuda humanitaria',
      imageClass: 'project-navidad',
      impact: '+500 familias beneficiadas',
      description: 'Entregamos 500 mercados, 500 kits escolares, 500 juguetes y más de 500 prendas de vestir durante la temporada navideña.'
    },
    {
      id: 4,
      name: 'Coquí, Nuquí',
      year: '2025 – Actualidad',
      location: 'Nuquí, Chocó',
      tag: 'Educación y liderazgo juvenil',
      imageClass: 'project-nuqui',
      impact: '+100 estudiantes, docentes y familias',
      description: 'Junto a Mochileros.co, construimos una iniciativa en Nuquí para fortalecer espacios educativos, promover intercambio cultural y abrir nuevas oportunidades para jóvenes de diferentes regiones del país.'
    },
    {
      id: 5,
      name: 'Córdoba',
      year: '2026',
      location: 'Córdoba',
      tag: 'Respuesta humanitaria',
      imageClass: 'project-cordoba',
      impact: '+400 personas beneficiadas',
      description: 'Organizamos una jornada de emergencia con mercados, productos de higiene personal y agua potable para atender necesidades básicas de comunidades vulnerables.'
    },
    {
      id: 6,
      name: 'Pragma Radar',
      year: '2025 – Actualidad',
      location: 'Colombia',
      tag: 'Tecnología cívica',
      imageClass: 'project-pragma',
      impact: '+10.000 visualizaciones',
      description: 'Pragma Radar es nuestra plataforma civic-tech para promover el voto informado, combatir la desinformación y hacer veeduría ciudadana mediante seguimiento tipo semáforo.'
    },
    {
      id: 7,
      name: 'Encuentro de liderazgo político',
      year: '2025',
      location: 'Universidad de los Andes',
      tag: 'Participación ciudadana',
      imageClass: 'project-liderazgo',
      impact: 'Jóvenes, líderes y actores políticos conectados',
      description: 'Creamos un espacio de diálogo entre jóvenes, precandidatos presidenciales, representantes a la Cámara y líderes emergentes.'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projects.find((p) => p.id === id) || this.projects[0];
  }
}
