function viewAllRegistriesHandler(event) {
    event.preventDefault();
    document.location.replace('/registries/')   
};

function createRegistryHandler(event) {
    event.preventDefault();
    document.location.replace('/choosecategory/')   
};


document.querySelector('.allregs1').addEventListener('click', viewAllRegistriesHandler);
document.querySelector('.allregs2').addEventListener('click', viewAllRegistriesHandler);
document.querySelector('.allregs3').addEventListener('click', viewAllRegistriesHandler);
document.querySelector('.allregs4').addEventListener('click', viewAllRegistriesHandler);
 
document.querySelector(".createregistry1").addEventListener('click', createRegistryHandler);
document.querySelector(".createregistry2").addEventListener('click', createRegistryHandler);
document.querySelector(".createregistry3").addEventListener('click', createRegistryHandler);
document.querySelector(".createregistry4").addEventListener('click', createRegistryHandler);
