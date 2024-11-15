export const playerAPI = {
  currentLocation: Array(10).fill(0).fill(1, 0, 1),
  playerGo() {
    const currentPosition = this.currentLocation.findIndex((n) => n === 1);
    if (currentPosition >= 0 && currentPosition < this.currentLocation.length - 1) {
      this.currentLocation[currentPosition] = 0;
      this.currentLocation[currentPosition + 1] = 1;
      document.querySelector(".player").className = `player step${currentPosition + 2}`;
    }
  }
};
