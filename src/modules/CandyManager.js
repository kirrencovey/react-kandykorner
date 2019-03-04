import APIManager from "./APIManager"
import Settings from "./Settings"


export default Object.create(APIManager, {
    addCandy: {
        value: function (newCandy) {
            return fetch(`${Settings.remoteURL}/candies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandy)
            }).then(data => data.json())
      }
    }
})