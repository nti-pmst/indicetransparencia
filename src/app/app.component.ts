import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  videos: IVideo[] = [
    {titulo: "1 - Informações da Receita", subtitulo: "", url: "../assets/videos/informacoes_receita.mov"},
    {titulo: "2 - Informações da Despesa", subtitulo: "", url: "../assets/videos/informacoes_despesas.mov"},
    {titulo: "7 - Outras informações", subtitulo: "7.1 - Há informações de todos os Poderes e órgãos do ente da Federação de modo consolidado	", url: "../assets/videos/orgaos_e_poderes.mov"},
    {titulo: "7 - Outras informações", subtitulo: "7.2 - Registros de quaisquer repasses ou transferências de recursos financeiros	", url: "../assets/videos/repasses_e_transferencia.mov"},
    {titulo: "7 - Outras informações", subtitulo: "7.3 - Dados gerais para o acompanhamento de programas, ações, projetos e obras de órgãos e entidades", url: "../assets/videos/obras_e_serviços.mov"},
    {titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.1 - Gravação de relatórios", url: "../assets/videos/receitas_exportacao.mov"},
    {titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.4 - Série histórica dos dados", url: "../assets/videos/receitas_serie_historica_5_anos.mov"},
    {titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.5 - Delimitação temporal das consultas", url: "../assets/videos/receitas_consulta_temporal.mov"},
    {titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.1 - Gravação de relatórios", url: "../assets/videos/despesas_gravação_de_relatorios.mov"},
    {titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.4 - Série histórica dos dados", url: "../assets/videos/despesas_serie_historica_5_anos.mov"},
    {titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.5 - Delimitação temporal das consultas", url: "../assets/videos/despesas_consulta_temporal.mov"},
    {titulo: "17 - Requisitos tecnológicos para a sessão Licitações", subtitulo: "17.5 - Delimitação temporal das consultas", url: "../assets/videos/licitacao_consulta_temporal.mov"},
    {titulo: "17 - Requisitos tecnológicos para a sessão Licitações", subtitulo: "17.4 - Série histórica dos dados", url: "../assets/videos/licitacao_dados_historicos_4_anos.mov"}
  ];
}

interface IVideo {
  titulo: string,
  subtitulo: string,
  url: string
}