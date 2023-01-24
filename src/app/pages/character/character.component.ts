import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  public biography: string = ' Fox William Mulder, nascido em 13 de outubro de 1961 e se formou bacharel em Psicologia na Universidade de Oxford, em 1986. Depois ingressou na academia de treinamento do FBI em Quantico. Em 1988 foi designado para a Unidade de Crimes violentos (UCV), destacando-se em seu primeiro caso – a perseguição do perigoso assaltante de bancos, John Barnet. Trabalhava traçando os perfis dos criminosos. Atormentado com o desaparecimento de sua irmã mais nova Samantha Mulder,que ocorreu em 27 de novembro de 1973, fez quando jovem uma regressão hipnótica com o dr. Heitz, pela qual ficou convencido não só de que sua irmã fora abduzida por forças extraterrestres, mas também, que fora imobilizado por essas mesmas forças. Isso resultou numa mudança em sua carreira. Foi quando encontrou o denominado Arquivo X - casos inexplicáveis, que diziam respeito ao Paranormal - e resolveu dedicar-se a eles. É um agente competente e se destaca profissionalmente, mas possui crenças não convencionais e por isso recebeu o apelido de spooky -assombrado- Mulder.  Impulsionado pela crença em conspirações governamentais que acobertam a existência de extraterrestres, além de ter um acordo secreto com eles, ele se dedica ao arquivo x em busca da verdade.'
    public picture: string = '/assets/images/Mulder-knows-how-work-his-angles.webp'

}
 
