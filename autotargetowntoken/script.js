function initializeAutoTargetOwnToken() {

  Hooks.once("ready", async () => {
    console.log("Auto Target Own Token | Initialised");

    Hooks.on("updateToken", (scene, token, update, options, userId) => {
      if (token.actor?.id === game.user.character?.id) {
        canvas.tokens.releaseAll();
        token.object.control({ releaseOthers: true });
      }
    });
  });
}

initializeAutoTargetOwnToken();