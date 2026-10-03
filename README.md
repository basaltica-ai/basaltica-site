# Site Basaltica, Inc. — v3 (30/09/2026)

Aplica `Site_Basaltica_Ajustes_v2.md` com as mudanças do pedido: produto nomeado Inclina, monograma como marca do Inclina, favicons e cabeçalho com a marca da Basaltica.

## O que mudou desde a v2
- Inclina: "Inclina, our first product" no hero e na meta description; título da seção "Inclina, our first product, in three layers"; "the first version of Inclina" em How it works e Design partners.
- Monograma do Inclina (`mark.svg`, fundo claro) no início da seção de camadas, com 115 × 96 px (quadrado com ~8 px).
- Lava #FF4A1C em formas e detalhes (pontos da planta, borda do botão, régua da privacidade, barra da camada Test); grafite #3B3C42 no botão e na camada Test. Os números de How it works passaram de lava para grafite (lava nunca em texto pequeno).
- Careers: sem confirmação das vagas, a página saiu do site, do menu e do sitemap; Company diz "We will be hiring computer vision and edge engineers in Brazil."
- og-image.png nova (1200×630): logo da Basaltica, título do hero, basaltica.ai. theme-color #111214.
- Favicons: os da Basaltica (barras). Os do zip v2 são do Inclina e não foram usados.

## Verificado para a privacy policy
Nenhum analytics, nenhuma fonte externa (fontes self-hosted), nenhum embed, nenhum formulário; único script é `assets/plan.js`, local. O `_headers` (CSP default-src 'self') bloqueia recursos externos. Os logs de servidor dependem do host escolhido, como a política já diz.

## Antes de publicar
1. Criar e ler hello@ e privacy@basaltica.ai.
2. `./check.sh` → OK. Depois, testar o link no opengraph.xyz.

- 03/10: bio de Daniel (30+ anos em instrumentação/óleo e gás; 8 anos em visão computacional), "Founder, CEO and CTO", setup como calibração por loja, clusterização de lojas na camada Test.

- 03/10: marca da Basaltica trocada para o hexágono (seção da coluna basáltica) com setor lava no alto à direita; cabeçalho, favicons e og-image regenerados. favicon.svg clareia o hexágono em modo escuro; PNG e ICO têm contorno branco para abas escuras.

## Pendente
- Time a confirmar e advisors: `../pending/team-a-confirmar.html` (não subir).
