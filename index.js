console.clear();

class Human {

    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

}

class Player extends Human {

    #sportName;
    #inMainTeam;

    constructor(name, age, sportName, inMainTeam) {
        super(name, age);
        this.#sportName = sportName;
        this.#inMainTeam = inMainTeam;
    }

    get sportName() {
        return this.#sportName;
    }

    get inMainTeam() {
        return this.#inMainTeam;
    }

}

class FootballPlayer extends Player {

    constructor(name, age, inMainTeam) {
        super(name, age, 'football', inMainTeam);
    }

}

class Team {

    #footballPlayers = [];

    get footballPlayers() {
        return [...this.#footballPlayers];
    }

    addPlayers(...footballPlayers) {
        this.#footballPlayers.push(...footballPlayers);
    }

    deletePlayer(footballPlayer) {
        const indexOfFootballPlayer = this.#footballPlayers.indexOf(footballPlayer);

        if (indexOfFootballPlayer !== -1) {
            this.#footballPlayers.splice(indexOfFootballPlayer, 1);
        }
    }

    getPlayersSortedByName() {
        return [...this.#footballPlayers].sort((a, b) => {
            const name1 = a.name.toLowerCase();
            const name2 = b.name.toLowerCase();

            return name1.localeCompare(name2);
        });
    }

    getFilteredPlayers(inMainTeam) {
        return this.#footballPlayers.filter(footballPlayer => footballPlayer.inMainTeam === inMainTeam);
    }

}