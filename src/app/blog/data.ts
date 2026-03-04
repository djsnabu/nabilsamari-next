export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "festivaali-nollasta",
    title: "Miten rakensin festivaalin nollasta",
    date: "2026-02-15",
    category: "Tapahtumat",
    excerpt: "Pällkäneen Kesäpäivät syntyi ideasta, jonka toteutin yhdestä ihmisestä kasvaneella tiimillä. Tässä mitä opin matkalla.",
    content: `
Kun perustin Pällkäneen Kesäpäivät, minulla ei ollut mitään valmiina – ei budjettia, ei yhteistyökumppaneita, ei lipunmyyntijärjestelmää.

## Mistä aloittaa?

Ensimmäinen askel oli yksinkertainen: valitse päivämäärä ja paikka. Kun nämä ovat lukittu, kaikki muu rakentuu niiden ympärille.

Pälkäne valikoitui, koska alue tarvitsi tapahtumaa joka toisi ihmisiä yhteen. Vilpolan miljöö oli täydellinen.

## Artistit ja budjetti

Artistien bookkaus on tasapainoilu tunnettuuden ja budjetin välillä. Ensimmäisellä vuodella suosin paikallisia ja puolipaikallisia nimiä – pienemmät palkkiot, mutta sitoutunut yleisö.

## Mitä opin

- **Aloita pienestä, skaalaa hitaasti.** Parempi onnistunut pieni tapahtuma kuin epäonnistunut iso.
- **Yhteisöllisyys myy.** Kun ihmiset tuntevat tapahtuman omakseen, he markkinoivat sen puolesta.
- **Automaatio pelastaa.** n8n-automaatio, joka hoitaa sopimukset ja infopaketit automaattisesti, säästää tunteja per tapahtuma.

Festivaali on edelleen pystyssä ja kasvaa vuosi vuodelta. Paras investointi jonka olen koskaan tehnyt.
    `.trim(),
  },
  {
    slug: "ai-automaatio-arjessa",
    title: "AI ja automaatio yrityksen arjessa",
    date: "2026-01-28",
    category: "Teknologia",
    excerpt: "Olen rakentanut yritykseni ympärille automaatioita jotka säästävät tunteja viikossa. Tässä käytännön esimerkkejä.",
    content: `
Kun kuulet "AI ja automaatio", saatat ajatella isoja yrityksiä ja miljoonabudjetteja. Todellisuudessa pienyritys voi hyötyä enemmän – koska jokainen säästetty tunti on merkittävämpi.

## Mikä on n8n?

n8n on avoimen lähdekoodin automaatiotyökalu jonka voi ajaa itse. Yhdistän sillä kaikkea: Calendlystä tulevat varaukset → automaattinen sopimusluonnos → allekirjoituspyyntö → laskutus.

## Käytännön esimerkki: keikkamyynti

Ennen: varauspyyntö → manuaalinen sähköposti → sopimus Wordissä → manuaalinen lähetys → lasku.

Nyt: varauspyyntö → n8n käynnistyy → sopimus luodaan automaattisesti → lähetetään allekirjoitukseen → lasku luodaan Netvisoriin.

Aikaa säästyy 45-60 minuuttia per keikkavaraus.

## AI käytännössä

En käytä AI:ta korvaamaan luovuuttani. Käytän sitä:
- Ensiluonnoksiin (markkinointitekstit, vastaukset kyselyihin)
- Datan analysointiin (tapahtumien myyntiluvut)
- Koodausavuksi (automaatioiden rakentaminen)

## Aloita näin

1. Valitse yksi toistuva tehtävä joka vie sinulta aikaa
2. Kartoita askeleet: mikä laukaisee sen, mikä on lopputulos?
3. Kokeile n8n tai Zapier – molemmat ovat ilmaisia aloittaa

Automaatio ei ole seksikästä. Se on tylsää, yksittäistä, mekaanista työtä. Ja juuri siksi se on niin arvokasta.
    `.trim(),
  },
];
