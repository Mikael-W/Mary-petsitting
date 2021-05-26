<template>
  <div class="container">
    <Menu />
    <Logo />
    <Header />
    <div class="article-section">
      <h1>Pourquoi choisir un petsitter ?</h1>
      <img src="../assets/img/petsitter.jpeg" alt="petsitter nantes" />
      <article>
        <p class="article-text">
          Depuis quelques années, le <strong>petsitting</strong> s’est installé en France. Ce
          nouveau concept vous permet de faire garder votre animal par un
          professionnel en toute tranquillité pendant vos absences. En effet, ce
          professionnel est diplômé de l’état en ayant obtenu son CCAD. Il a
          payé pour cette formation et est agréé. Le <strong>pet sitter</strong> paye aussi une
          assurance Responsabilité Civile Professionnelle qui vous couvre en cas
          de dommages, dégâts ou d’accidents provoqués par votre animal en votre
          absence. Il vous fait signer un contrat avec des clauses et s’engage à
          tenir ce qu’il vous propose, c’est son travail. Le pet sitter est
          forcément une personne qualifiée et compétente.
        </p>

        <p class="article-text">
          La <strong>Garde à domicile</strong> est idéale pour les animaux qui ne supportent pas
          le changement d’environnement, qui stressent durant les transports. Ce
          service de garde peut être aussi une bonne alternative en cas
          d’accidents de la vie ou d’imprévus.
        </p>

        <p class="article-text">
          Grâce à la personne de confiance que vous aurez choisie, votre loulou
          pourra rester dans son lieu de vie et garder ses habitudes.
        </p>

        <p>
          Le <strong>pet sitter</strong> aura pour rôle principal d’assurer le bien-être des
          animaux qu’il aura en garde et donc sous sa responsabilité et aussi de
          vous rassurer avant et pendant la garde. Il mettra à profit lors de la
          garde ses compétences et ses connaissances.
        </p>

        <p class="article-text">
          De partir le temps d’une journée ou d’un long séjour sans son animal
          est parfois dur que ce soit pour lui que pour vous. Choisir l’option
          d’un <strong>pet sitter</strong> permet à votre compagnon de rester dans son lieu de
          vie, avec ses affaires et odeurs et les vôtres, ses jouets, son
          alimentation, son couchage, ses habitudes… Ce changement est moins
          difficile pour lui car il garde son mode de vie, et vous, vous êtes
          plus rassurés de le savoir en présence de quelqu’un de confiance que
          vous aurez choisi.
        </p>

        <ul class="article-list">
          Ce nouveau mode de garde plait de plus en plus et offre de nombreux
          avantages comme :
          <li>
            de faire garder tous vos <strong>animaux de compagnie</strong> ; chien, chat, furet,
            lapins, rongeurs, animaux de la ferme…tout dépend de la
            spécialisation du <strong>pet sitter</strong>.
          </li>
          <li>
            Cela permet d’avoir une <strong>garde personnalisée</strong>, si votre animal ne
            s’entend pas avec ses congénères, vous avez la possibilité de le
            faire garder seul et chez lui. Il pourra ainsi bénéficier d’une
            attention toute particulière pendant votre absence.
          </li>
          <li>
            De partir en toute tranquillité et sereinement, vous avez la
            possibilité de recevoir des nouvelles de votre compagnon en photos
            et vidéos avec un petit message pour vous rassurer
          </li>
          <li>
            La pré visite est primordiale avant de confier votre animal de
            compagnie, vous pourrez alors avoir un premier contact avec la
            future nounou de votre loulou et qu’il prenne confiance lui aussi.
            Vous présenterez ainsi tout sur votre <strong>animal de compagnie</strong> afin que
            le <strong>pet sitter</strong> sache exactement ce dont il a besoin, des allergies,
            des soins médicaux, ses habitudes…
          </li>
          <li>Garder, en plus de l’animal, sa maison en sécurité</li>
          <li>
            Le <strong>petsitter</strong> peut également proposer diverses services comme
            l’arrosage de vos plantes, relever le courrier,…
          </li>
        </ul>
        <p class="article-text">
          C’est à vous de choisir la bonne « nounou » de votre compagnon !
        </p>
        <p class="article-text">Animalement,</p>
        <p class="article-text">Mary.</p>
      </article>
    </div>
    <QuotationLink />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style>
.article-section {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  font-size: 2vw;
  font-family: "poppins", sans-serif;
}
h1 {
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
  padding: 2vw 0;
}
.article-list {
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  font-size: 2vw;
  color: #fcacdf;
  font-family: "poppins", sans-serif;
}
.article-list li {
  width: 80vw;
  font-size: 2vw;
  padding-top: 1.5vw;
  color: initial;
  font-family: "poppins", sans-serif;
}
.article-list li::before {
  content: "\2022";
  color: #fcacdf;
  font-weight: bold;
  display: inline-block;
  width: 1.2vw;
}
.article-text{
    padding: 2vw 0;
}
</style>