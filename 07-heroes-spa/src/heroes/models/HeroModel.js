import heroes from "../data/heroes";

export default class HeroModel {
    static getHeroesByPublishera(publisher) {
        const validPublishers = ["DC Comics", "Marvel Comics"];

        if(!validPublishers.includes(publisher)) 
            throw Error(`${publisher} is not a valid publisher`);

        return heroes.filter(hero => hero.publisher === publisher);
    }

    static getHeroById(id) {
        return heroes.find(hero => hero.id === id);
    }
}