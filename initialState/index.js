export default {
    "game": {
        "home": {
            "score": 0,
            "name": "",
            "players": []
        },
        "away": {
            "score": 0,
            "players": []
        },
        "settings": {
            "mode": "", // [street, college, fiba, nba, custom],
            "quarters": 4,  // only if custom
            "pointsToWin": 21 // only if street
        }
    },
    "teams": [
        {
            "name": "Lakers",
            "img": "./something",
			"players": []
        }
    ],
    "games": [
        {
            "home": {
                "score": 0,
                "name": "",
                "players": []
            },
            "away": {
                "score": 0,
                "players": []
            },
            "settings": {
                "mode": "street", // [street, college, fiba, nba, custom],
                "quarters": null,  // only if custom
                "pointsToWin": 21 // only if street
            }
        }
    ],
    "players": [
        {
            "name": "Richard Orofeo",
            "position": "PG",
            "stats": {
                "ppg": 30.1,
                "apg": 11.3,
                "rpg": 10.7,
                "bpg": 4.1
            }
        }
    ]
};

