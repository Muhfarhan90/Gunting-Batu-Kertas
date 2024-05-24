const kertas = document.getElementById("kertas");
const batu = document.getElementById("batu");
const gunting = document.getElementById("gunting");
let pilihan_user = document.getElementById("pilihan-user");
let pilihan_com = document.getElementById("pilihan-com");
const kotak_user = document.getElementById("kotak-user");

kotak_user.appendChild(pilihan_user);

kertas.addEventListener("click", function () {
  pilihan_user.textContent = "🖐️";
  playGame();
});

batu.addEventListener("click", function () {
  pilihan_user.textContent = "✊";
  playGame();
});

gunting.addEventListener("click", function () {
  pilihan_user.textContent = "✌️";
  playGame();
});

function generateComputerChoice() {
  const choice = ["✌️", "✊", "🖐️"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function menentukanPemenang(userChoice, comChoice) {
  if (userChoice === comChoice) {
    return "Wah Sayang sekali hasilnya seri! , Coba lagi yah...";
  } else if (userChoice === "🖐️" && comChoice === "✊") {
    return "Selamat Kamu Memenangkan Permainan !";
  } else if (userChoice === "✌️" && comChoice === "✊") {
    return "Nice Try...Ayo coba lagi !";
  } else if (userChoice === "🖐️" && comChoice === "✌️") {
    return "Nice Try...Ayo coba lagi !";
  } else if (userChoice === "✊" && comChoice === "✌️") {
    return "Selamat Kamu Memenangkan Permainan !";
  } else if (userChoice === "✊" && comChoice === "🖐️") {
    return "Nice Try...Ayo coba lagi !";
  } else if (userChoice === "✌️" && comChoice === "🖐️") {
    return "Selamat Kamu Memenangkan Permainan !";
  }
}

// function playGame() {
//   setTimeout(function () {
//     const com_choice = generateComputerChoice();
//     const result = menentukanPemenang(pilihan_user.textContent, com_choice);

//     //menampilkan pilihan dan hasil permainan
//     pilihan_com.textContent = com_choice;
//     document.getElementById("hasil-teks").textContent = result;
//     const hasil_popup = document.getElementById("hasil-pop-up");
//     hasil_popup.style.display = "block";
//     //Btn-OK
//     document.getElementById("btn-ok").addEventListener("click", function () {
//       hasil_popup.style.display = "none";
//       pilihan_com.textContent = "";
//       pilihan_user.textContent = "";
//     });
//   }, 1000);
// }

function playGame() {
  const computerChoice = generateComputerChoice();
  const result = menentukanPemenang(pilihan_user.textContent, computerChoice);
  // Tampilkan pilihan komputer dan hasil permainan
  document.getElementById("pilihan-com").textContent = computerChoice;

  Swal.fire({
    title: "Hasil Permainan",
    text: result,
    timer: 9000, // Pop-up will disappear after 2 seconds
  });
}
