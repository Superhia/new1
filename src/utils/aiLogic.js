const generateAIResponse = (message, userType, profile) => {
  // Simulate AI logic
  if (!userType) {
    if (message.toLowerCase().includes('candidat')) {
      return {
        text: "Parfait ! Parlons de votre recherche. Quel type de poste recherchez-vous ?",
        suggestions: ["Développeur", "Designer", "Marketing", "Commercial"]
      }
    }
    if (message.toLowerCase().includes('recruteur')) {
      return {
        text: "Excellent ! Pour quel type de poste recrutez-vous ?",
        suggestions: ["Créer une offre", "Voir les candidats", "Définir les critères"]
      }
    }
    return {
      text: "Êtes-vous un candidat ou un recruteur ?",
      suggestions: ["Je suis candidat", "Je suis recruteur"]
    }
  }

  if (userType === 'candidate') {
    if (!profile.jobType) {
      return {
        text: "Quel est votre domaine d'expertise principal ?",
        suggestions: ["Tech", "Marketing", "Finance", "RH"]
      }
    }
    if (!profile.experience) {
      return {
        text: "Combien d'années d'expérience avez-vous ?",
        suggestions: ["Débutant", "1-3 ans", "3-5 ans", "5+ ans"]
      }
    }
  }

  if (userType === 'recruiter') {
    if (!profile.company) {
      return {
        text: "Pouvez-vous me parler du poste à pourvoir ?",
        suggestions: ["Définir le poste", "Ajouter les prérequis", "Préciser le salaire"]
      }
    }
  }

  return {
    text: "Je peux vous aider avec autre chose ?",
    suggestions: ["Voir les matchs", "Modifier le profil", "Terminer"]
  }
}

export default generateAIResponse
