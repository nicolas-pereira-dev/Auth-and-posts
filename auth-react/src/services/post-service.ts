import { Post } from "../models/post";


const postList = [
    { id: 0, title: "Super KFC avec mes amis !", content: "Aujourd'hui j'ai très bien mange au KFC de chateauroux pour l'anniversaire d'une amie. Je recommande.", authorId: 1 },
    { id: 1, title: "Petite session de sport", content: "Je suis allé courir 10 km ce matin, les jambes en feu mais ça valait le coup.", authorId: 1 },
    { id: 2, title: "Nouveau film au ciné", content: "J'ai vu le dernier film d'action hier soir, les effets spéciaux sont incroyables.", authorId: 2 },
    { id: 3, title: "Week-end à la montagne", content: "Randonnée géniale ce week-end, la vue au sommet était à couper le souffle.", authorId: 0 },
    { id: 4, title: "Ma nouvelle recette de pâtes", content: "J'ai testé une recette de pâtes aux champignons, un régal, je la referai.", authorId: 1 },
    { id: 5, title: "Soirée jeux vidéo", content: "Grosse session de jeux avec les potes hier, on a fini à 3h du matin.", authorId: 2 },
    { id: 6, title: "Concert improvisé", content: "Je suis tombé sur un concert de rue en rentrant du boulot, ambiance de folie.", authorId: 0 },
    { id: 7, title: "Le meilleur burger de la ville", content: "J'ai découvert un petit resto de burgers, clairement le meilleur que j'ai mangé.", authorId: 1 },
    { id: 9, title: "Balade au bord du lac", content: "Promenade tranquille au lac ce matin, le calme absolu.", authorId: 0 },
    { id: 10, title: "Match de foot entre amis", content: "On a joué un match mémorable hier, on a perdu mais on a bien rigolé.", authorId: 1 },
    { id: 11, title: "Café et croissants", content: "Petit dej parfait au café du coin, je recommande leurs croissants.", authorId: 2 },
    { id: 12, title: "Nouvelle série à binge-watcher", content: "J'ai commencé une nouvelle série hier, j'ai enchaîné 6 épisodes d'affilée.", authorId: 0 },
    { id: 13, title: "Sortie vélo", content: "40 km de vélo sous le soleil, les cuisses s'en souviennent.", authorId: 1 },
    { id: 14, title: "Découverte d'un marché", content: "Je suis allé au marché local ce matin, plein de produits frais et d'odeurs.", authorId: 2 },
    { id: 15, title: "Soirée pizza maison", content: "On a fait des pizzas maison avec des amis, la pâte était parfaite.", authorId: 0 },
    { id: 16, title: "Musée improvisé", content: "Visite d'un musée cet après-midi, j'ai découvert des artistes géniaux.", authorId: 1 },
    { id: 17, title: "Séance de ciné maison", content: "Soirée film à la maison avec popcorn, le combo parfait.", authorId: 2 },
    { id: 18, title: "Brunch du dimanche", content: "Brunch entre amis ce dimanche, œufs bénédicte et jus frais, top.", authorId: 0 },
    { id: 19, title: "Escapade à la mer", content: "Journée à la plage hier, l'eau était fraîche mais le soleil au rendez-vous.", authorId: 1 },
    { id: 20, title: "Nouveau jeu de société", content: "On a testé un nouveau jeu de société hier soir, on a bien galéré.", authorId: 2 },
    { id: 21, title: "Cours de cuisine", content: "J'ai pris un cours de cuisine italienne, les raviolis étaient incroyables.", authorId: 0 },
    { id: 22, title: "Randonnée matinale", content: "Départ à 6h pour une rando, lever de soleil magnifique.", authorId: 1 },
    { id: 23, title: "Thé et lecture", content: "Après-midi cosy : thé, plaid et bon bouquin.", authorId: 2 },
    { id: 24, title: "Basket au parc", content: "Petit match de basket au parc, mon shoot était enfin correct.", authorId: 0 },
    { id: 25, title: "Resto japonais", content: "Soirée sushi hier soir, frais et délicieux, je recommande.", authorId: 1 },
    { id: 26, title: "Sortie photo", content: "Je me suis baladé avec mon appareil photo, j'ai capturé de belles lumières.", authorId: 2 },
    { id: 27, title: "Après-midi au parc", content: "Pique-nique improvisé au parc, soleil et bonne humeur.", authorId: 0 },
    { id: 28, title: "Nouvel album en boucle", content: "Je réécoute en boucle le nouvel album sorti cette semaine, une pépite.", authorId: 1 },
    { id: 29, title: "Petit dej en terrasse", content: "Café en terrasse ce matin, profiter du soleil avant d'attaquer la journée.", authorId: 2 },
    { id: 30, title: "Soirée karaoké", content: "Karaoké avec les amis hier, j'ai chanté faux mais on s'est bien amusés.", authorId: 0 },
    { id: 31, title: "Visite d'un château", content: "Visite d'un château ce week-end, l'histoire derrière les murs est fascinante.", authorId: 1 },
    { id: 32, title: "Séance de yoga", content: "Premier cours de yoga ce matin, plus relaxé qu'attendu.", authorId: 2 },
    { id: 33, title: "Découverte d'une brasserie", content: "J'ai testé une brasserie artisanale hier, la bière blonde est excellente.", authorId: 0 },
    { id: 34, title: "Soirée jeux de cartes", content: "Parties de cartes endiablées hier soir, on a enchaîné jusqu'à minuit.", authorId: 1 },
    { id: 35, title: "Nouveau café en ville", content: "Un nouveau café a ouvert près de chez moi, l'ambiance y est parfaite.", authorId: 2 },
    { id: 36, title: "Sortie en kayak", content: "Balade en kayak sur la rivière cet après-midi, quelle aventure.", authorId: 0 },
    { id: 37, title: "Marathon de séries", content: "Week-end pluvieux = marathon de séries sous le plaid.", authorId: 1 },
    { id: 38, title: "Cueillette de fruits", content: "On a cueilli des fraises en famille ce matin, sucrées à souhait.", authorId: 2 },
    { id: 39, title: "Concours de pétanque", content: "Petit tournoi de pétanque hier, je suis arrivé deuxième.", authorId: 0 },
    { id: 40, title: "Réparation de vélo", content: "J'ai retapé mon vieux vélo ce week-end, il roule comme neuf.", authorId: 1 },
    { id: 41, title: "Soirée cinéma en plein air", content: "Cinéma en plein air hier soir, le film était moyen mais l'ambiance géniale.", authorId: 2 },
    { id: 42, title: "Dégustation de fromages", content: "Plateau de fromages entre amis hier, un voyage en France sans bouger.", authorId: 0 },
    { id: 43, title: "Initiation à l'escalade", content: "J'ai testé l'escalade en salle, mes bras s'en souviennent encore.", authorId: 1 },
    { id: 44, title: "Balade en forêt", content: "Longue marche en forêt ce matin, l'air pur fait un bien fou.", authorId: 2 },
    { id: 45, title: "Nouveau resto italien", content: "Découverte d'un resto italien hier, les lasagnes sont divines.", authorId: 0 },
    { id: 46, title: "Session de peinture", content: "J'ai ressorti mes pinceaux cet après-midi, ça fait du bien de créer.", authorId: 1 },
    { id: 47, title: "Après-midi parc d'attractions", content: "Journée au parc d'attractions, les montagnes russes étaient dingues.", authorId: 2 },
    { id: 48, title: "Petit déjeuner à la ferme", content: "Petit déj à la ferme ce matin, produits locaux et vue magnifique.", authorId: 0 },
    { id: 49, title: "Soirée feu de camp", content: "Feu de camp entre amis hier soir, guimauves et discussions jusqu'au bout de la nuit.", authorId: 1 }
];

const getAllPost = async (): Promise<Post[]> => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(postList), 1000));
}

export const getPostFromUserId = async (userId: number, page = 0, size = 10): Promise<Post[]> => {
    const result = postList.filter( post => post.authorId === userId);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result), 1000));
};
export default getAllPost;