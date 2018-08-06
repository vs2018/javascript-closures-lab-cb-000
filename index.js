const app = "I don't do much."

function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  function deadlyDevice () {
    return {
      animalType,
      deadlyDevice
    }
  }
}
