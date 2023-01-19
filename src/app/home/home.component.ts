import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}
  
  public texto: string = 'The X-Files é uma série de televisão norte-americana de ficção científica criada por Chris Carter. A série foi exibida originalmente entre 10 de setembro de 1993 e 19 de maio de 2002, no canal norte-americano Fox. Além da série de TV, dois filmes também integram sua franquia: The X-Files, lançado em 1998, que ajuda a explorar a história maior narrada pela série e The X-Files: I Want to Believe, lançado em 2008, que serve apenas como um evento episódico. Na série, os agentes especiais do FBI, Fox Mulder (David Duchovny) e Dana Scully (Gillian Anderson), investigam os Arquivos-x: casos não solucionados envolvendo fenômenos paranormais. Mulder acredita na existência de extraterrestres e em paranormalidade, enquanto Scully, uma médica cética, é designada para fazer análises científicas das descobertas de Mulder e propor alternativas racionais ao seu trabalho. Ainda no começo da série, ambos os agentes tornam-se alvo de uma trama conspiratória e passam a confiar apenas um no outro e em outras poucas pessoas. Os agentes também descobrem os planos do governo de manter a existência de vida extraterrestre um segredo. Eles desenvolvem um relacionamento próximo, começando com um sentimento platônico e depois tornando-se um relacionamento romântico no término da série. Além dos episódios que ajudam a explorar esta história maior contada pela série, há também histórias curtas, que lidam com o paranormal, contadas em apenas um episódio.'

  public texto2: string = 'Sinopse O Arquivo X é um arquivo que contém relatos sobre casos paranormais não explicados que acabaram guardados no subsolo do FBI. Mais tarde, foram achados pelo agente Fox Mulder. Desacreditado e debochado pelos outros membros do FBI, Mulder começa a investigar esses arquivos X, que contêm casos de abduções e parecem envolver uma conspiração do governo americano para esconder a existência de vida extraterrestre. Nos arquivos, também se encontram casos envolvendo satanismo, relatos de aparições de fantasmas, ocultismo e outros casos misteriosos. Sua busca pela verdade também tem, como meta, encontrar sua irmã, raptada há mais de vinte anos e que ele acredita ter sido abduzida por alienígenas. Na tentativa de invalidar as suas investigações e fechar o arquivo x, o FBI recruta a agente Dana Scully, uma agente que, além de médica, cientista e legista, é cética e deve reportar e dar uma explicação científica para os estranhos casos que Mulder e ela vão investigar, mais ou menos como uma espiã. Entretanto, com o passar do tempo, a própria agente Scully começa a se dar conta de que as inacreditáveis teorias de seu parceiro fazem sentido e cada vez mais a sua ciência passa não mais a confrontar o que testemunha, mas a buscar respostas científicas para tais acontecimentos. Pouco a pouco, Scully torna-se mais crente e sua parceria com Mulder evolui a estágios inesperados de grande amizade (nas temporadas seguintes, um romance) e cumplicidade na busca pela verdade e para desbaratar a grande conspiração que envolve os altos escalões do governo americano.'

  

  public character: Array<string> = [
    'Dana Scully', 'Fox mulder'
  ]

}

