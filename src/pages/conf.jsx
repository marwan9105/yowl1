import React from 'react';

function conf() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Politique de Confidentialité de Melo</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Bienvenue dans l'univers de Melo, où la musique rencontre le réseau social. Chez Melo, nous nous engageons à protéger et à respecter votre vie privée. Cette politique détaille comment nous traitons vos informations personnelles lorsque vous utilisez notre application. Nous vous encourageons à la lire attentivement pour comprendre nos pratiques concernant vos informations personnelles et comment nous les traiterons. En utilisant Melo, vous acceptez les pratiques décrites dans cette politique.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Informations que Nous Collectons</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>Informations d'Inscription : Lorsque vous créez un compte Melo, nous collectons votre nom d'utilisateur, adresse e-mail et mot de passe. Si vous vous inscrivez via Spotify, nous collectons également votre nom d'utilisateur Spotify et votre adresse e-mail associée.</li>
          <li>Informations de Profil : Nous collectons les informations que vous choisissez de fournir dans votre profil, telles que vos goûts musicaux.</li>
          <li>Données de Connexion et d'Utilisation : Nous collectons des informations sur votre utilisation de Melo, y compris les interactions musicales et les préférences.</li>
          <li>Données Collectées via Spotify : Si vous vous connectez via Spotify, nous collectons des données liées à vos préférences musicales et votre historique d'écoute pour personnaliser votre expérience.</li>
          <li>Données Collectées via Google OAuth : En cas d'inscription ou de connexion via Google, nous collectons votre nom d'utilisateur Google et votre adresse e-mail.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Utilisation de Vos Informations</h2>
        <p className="mb-4">
          Pour Fournir et Améliorer Nos Services : Nous utilisons vos informations pour gérer votre compte, fournir, maintenir et améliorer nos services. Cela inclut l'utilisation de vos données pour améliorer les fonctionnalités de Melo et personnaliser votre expérience.
        </p>
        <p className="mb-4">
          Personnalisation : Vos données de préférences musicales nous aident à personnaliser votre expérience sur Melo.
        </p>
        <p className="mb-4">
          Communication : Nous pouvons utiliser vos informations pour communiquer avec vous, par exemple, pour vous envoyer des mises à jour de service.
        </p>
        <p className="mb-4">
          Services de Référencement pour Musiciens et Labels : Nous offrons également aux musiciens indépendants et aux labels de musique des services de référencement pour les aider à cibler leur audience plus efficacement. Ces services sont basés sur l'analyse des données d'audience pour fournir un référencement personnalisé et pertinent.
        </p>
        <p className="mb-4">
          Sécurité : Vos données nous aident à améliorer la sécurité et l'intégrité de notre application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Partage et Divulgation des Informations</h2>
        <p className="mb-4">
          Avec Consentement : Nous ne partageons vos informations personnelles avec des tiers qu'après avoir obtenu votre consentement explicite.
        </p>
        <p className="mb-4">
          Pour des Raisons Légales : Si nécessaire, nous pouvons partager vos informations pour nous conformer à une obligation légale ou réglementaire.
        </p>
        <p className="mb-4">
          Prestataires de Services : Nous partageons vos informations avec des fournisseurs de services tiers qui nous aident à fournir nos services (comme des fournisseurs d'hébergement cloud).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Sécurité de Vos Informations</h2>
        <p className="mb-4">
          Mesures de Sécurité : Nous prenons des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, la divulgation, la modification ou la destruction non autorisée.
        </p>
        <p className="mb-4">
          Cryptage : Vos données sont protégées par cryptage pendant le transit et lorsqu'elles sont stockées sur nos serveurs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Vos Droits en Matière de Confidentialité</h2>
        <p className="mb-4">
          Accès et Contrôle : Vous avez le droit de demander l'accès, la correction ou la suppression de vos données personnelles. Vous pouvez également limiter l'utilisation et le partage de vos informations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications de cette Politique</h2>
        <p className="mb-4">
          Mises à Jour : Cette politique peut être mise à jour périodiquement. Nous vous notifierons de tout changement significatif.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contactez Nous</h2>
        <p>
          Pour des Questions ou Préoccupations : Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:melo@epitech.digital" className="text-blue-500 underline">melo@epitech.digital</a>.
        </p>
      </section>
    </div>
  );
}

export default conf;
