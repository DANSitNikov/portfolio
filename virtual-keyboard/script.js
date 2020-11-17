const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
        addEventEng: 0,
        addEventRus: 0,
        backspace: 0,
        tab: 0,
        caps: 0,
        shift: 0,
        enter: 0,
        space: 0,
        slash: 0,
        arrl: 0,
        arrr: 0,
        arrb: 0,
        arr: 0,
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        cursorPos: 0,
    },

    shift: {
        shift: false,
    },

    voice: {
        bool: false,
    },

    keyLayout: {
        eng: true,
    },

    init() {
        // Create main elements
        this.elements.main = document.querySelector('.keyboard');
        this.elements.keysContainer = document.querySelector('.keyboard__keys');

        this._createKeys()
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.prepend(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        let keyLayout = [
                "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
                "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
                "Caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
                "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "arrow", "done",
                "en", "micro", "Ctrl", "Space", "Ctrl", "arrow-left", "arrow-back", "arrow-right",
            ],
            additionToKeyboardItems = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "\"", "<", ">", "?"];

        if (!this.keyLayout.eng) {
            keyLayout = [
                "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
                "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
                "Caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
                "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "arrow", "done",
                "ru", "micro", "Ctrl", "Space", "Ctrl", "arrow-left", "arrow-back", "arrow-right",
            ];
            additionToKeyboardItems = ["!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "/"];
        }

        const keyboardItems = document.querySelectorAll('.keyboard__keys-item');
        keyboardItems.forEach(el => el.innerHTML = '');

        let n = 0,
            add = 0;

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach((key, i) => {
            const keyElement = document.createElement("button");

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data-key", "1");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "Backspace":
                    keyElement.classList.add("backspace");
                    keyElement.innerHTML = createIconHTML("backspace");

                    if (this.elements.backspace === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === key) {
                                this.pointToAdd('backspace');
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.backspace++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.pointToAdd('backspace');
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "arrow":
                    keyElement.classList.add('arrow');
                    keyElement.innerHTML = createIconHTML("arrow_upward");

                    if (this.elements.arr === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === "ArrowUp") {
                                this.positionOfArrow("arrow");
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.arr++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.positionOfArrow("arrow");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "arrow-left":
                    keyElement.classList.add('arrow');
                    keyElement.innerHTML = createIconHTML("arrow_back");

                    if (this.elements.arrl === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === "ArrowLeft") {
                                this.positionOfArrow("arrow-left");
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.arrl++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.positionOfArrow("arrow-left");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "arrow-back":
                    keyElement.classList.add('arrow');
                    keyElement.innerHTML = createIconHTML("arrow_downward");

                    if (this.elements.arrb === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === "ArrowDown") {
                                this.positionOfArrow("arrow-back");
                                this._triggerEvent("oninput");
                                this.playSoundsForRealKeyboard(keyElement);
                            }
                        });
                        this.elements.arrb++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.positionOfArrow("arrow-back");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "arrow-right":
                    keyElement.classList.add('arrow');
                    keyElement.innerHTML = createIconHTML("arrow_forward");

                    if (this.elements.arrr === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === "ArrowRight") {
                                this.positionOfArrow("arrow-right");
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.arrr++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.positionOfArrow("arrow-right");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "en":
                    keyElement.classList.add("ru-en");
                    keyElement.textContent = "en";

                    keyElement.addEventListener("click", () => {
                        this.playSoundsForRealKeyboard(keyElement);
                        this.changeLang();
                    });

                    break;

                case "ru":
                    keyElement.classList.add("ru-en");
                    keyElement.textContent = "ru";

                    keyElement.addEventListener("click", () => {
                        this.playSoundsForRealKeyboard(keyElement);
                        this.changeLang();
                    });

                    break;

                case "Enter":
                    keyElement.classList.add("Enter");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    if (this.elements.enter === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === key) {
                                this.pointToAdd("\n");
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.enter++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.pointToAdd("\n");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;

                case "Tab":
                    keyElement.classList.add("tab");
                    keyElement.innerHTML = createIconHTML("keyboard_tab");

                    if (this.elements.tab === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === key) {
                                this.pointToAdd("    ")
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.tab++
                    }

                    keyElement.addEventListener("click", () => {
                        this.playSoundsForRealKeyboard(keyElement);
                        this.pointToAdd("    ");
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Space":
                    keyElement.classList.add("space");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    if (this.elements.space === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === ' ') {
                                this.playSoundsForRealKeyboard(keyElement);
                                this.pointToAdd(" ");
                                this._triggerEvent("oninput");
                            }
                        });
                        this.elements.space++;
                    }

                    keyElement.addEventListener("click", () => {
                        this.pointToAdd(" ");
                        this._triggerEvent("oninput");
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;


                case "Ctrl":
                    keyElement.classList.add("ctrl");
                    keyElement.textContent = "Ctrl";

                    window.addEventListener('keydown', (e) => {
                        e.preventDefault();
                        if (e.key === "Control") {
                            this.playSoundsForRealKeyboard(keyElement);
                        }
                    });

                    keyElement.addEventListener("click", () => {
                        this.playSoundsForRealKeyboard(keyElement);
                    });

                    break;


                case "done":
                    keyElement.classList.add("done");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.playSoundsForRealKeyboard(keyElement);
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                case "Shift":
                    keyElement.classList.add("shift");
                    keyElement.innerHTML = createIconHTML("expand_less");

                    if (this.elements.shift === 0) {
                        window.addEventListener('keydown', (e) => {
                            if (e.key === key) {
                                this.capsShiftBackEnter();
                            }
                        });
                        this.elements.shift++;
                    }


                    keyElement.addEventListener("click", () => {
                        this._toggleShift(keyElement);
                        this.capsShiftBackEnter();
                    });

                    break;

                case "Caps lock":
                    keyElement.classList.add("Caps");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    if (this.elements.caps === 0) {
                        window.addEventListener('keydown', (e) => {
                            e.preventDefault();
                            if (e.key === key) {
                                this._toggleCapsLock(keyElement);
                                this.capsShiftBackEnter();
                            }
                        });
                        this.elements.caps++;
                    }

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock(keyElement);
                        this.capsShiftBackEnter();
                    });

                    break;

                case "micro":
                    keyElement.classList.add("micro");
                    keyElement.innerHTML = createIconHTML("mic");

                    keyElement.addEventListener('click', () => {
                        this.speakPlease(keyElement);
                    });

                    break;

                default:
                    if (this.keyLayout.eng) {
                        if (i <= 12 || i === 25 || i === 26 || i === 27 || i === 38 || i === 39 || i === 49 || i === 50 || i === 51) {
                            keyElement.innerHTML = `${key.toLowerCase()} <span class="additionToKeyboard">${additionToKeyboardItems[add]}</span>`;
                            add++;
                        } else {
                            keyElement.innerHTML = key.toLowerCase();
                        }

                        if (this.elements.addEventEng === 0) {
                            if (this.keyLayout.eng) {
                                window.addEventListener('keydown', (e) => {
                                    e.preventDefault();
                                    if (e.key === key) {
                                        if (this.shift.shift && (i <= 12 || i === 25 || i === 26 || i === 27 || i === 38 || i === 39 || i === 49 || i === 50 || i === 51)) {
                                            if (this.keyLayout.eng) {
                                                let b = `${keyElement.textContent[2]}`;
                                                this.pointToAdd(b)
                                            }
                                        } else {
                                            if (this.keyLayout.eng) {
                                                let b = this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                                                this.pointToAdd(b)
                                            }
                                        }
                                        this._triggerEvent("oninput");
                                        this.playSoundsForRealKeyboard(keyElement);
                                        this.elements.addEventEng++
                                    }
                                });
                            }
                        }

                        keyElement.addEventListener("click", (e) => {
                            if (this.shift.shift && (i <= 12 || i === 25 || i === 26 || i === 27 || i === 38 || i === 39 || i === 49 || i === 50 || i === 51)) {
                                let b = `${keyElement.textContent[2]}`;
                                this.pointToAdd(b);
                            } else {
                                let b = this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                                this.pointToAdd(b)
                            }
                            this._triggerEvent("oninput");
                            this.playSoundsForRealKeyboard(keyElement);
                            this.elements.addEventEng++;
                        });
                    } else {
                        if (i !== 0 && (i <= 12 || i === 27)) {
                            keyElement.innerHTML = `${key.toLowerCase()} <span class="additionToKeyboard">${additionToKeyboardItems[add]}</span>`;
                            add++;
                        } else {
                            keyElement.innerHTML = key.toLowerCase();
                        }

                        if (this.elements.addEventRus === 0) {
                            if (!this.keyLayout.eng) {
                                window.addEventListener('keydown', (e) => {
                                    e.preventDefault();
                                    if (e.key === key) {
                                        if (this.shift.shift && (i !== 0 && (i <= 12 || i === 27))) {
                                            if (!this.keyLayout.eng) {
                                                let b = `${keyElement.textContent[2]}`;
                                                this.pointToAdd(b);
                                            }
                                        } else {
                                            if (!this.keyLayout.eng) {
                                                let b = this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                                                this.pointToAdd(b);
                                            }
                                        }
                                        this._triggerEvent("oninput");
                                        this.playSoundsForRealKeyboard(keyElement);
                                        this.elements.addEventRus++
                                    }
                                });
                            }
                        }

                        keyElement.addEventListener("click", (e) => {
                            if (this.shift.shift && (i !== 0 && (i <= 12 || i === 27))) {
                                let b = `${keyElement.textContent[2]}`;
                                this.pointToAdd(b);
                            } else {
                                let b = this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                                this.pointToAdd(b);
                            }
                            this._triggerEvent("oninput");
                            this.playSoundsForRealKeyboard(keyElement);
                            this.elements.addEventRus++
                        });
                    }
                    break;
            }

            window.addEventListener('keydown', (e) => {
                if (e.key === key) {
                    console.log(keyElement);
                    if (keyElement.classList.contains('shift')) {
                        this._toggleShift(keyElement);
                    } else if (keyElement.classList.contains('Caps')) {
                        this._toggleShift(keyElement);
                    } else {
                        this.playSoundsForRealKeyboard(keyElement);
                    }
                } else if (e.key === ' ') {
                    if (keyElement.classList.contains('space')) {
                        this.playSoundsForRealKeyboard(keyElement);
                    }
                } else if (e.key === 'ArrowUp' && i === 52) {
                    this.playSoundsForRealKeyboard(keyElement);
                } else if (e.key === 'ArrowDown' && i === 60) {
                    this.playSoundsForRealKeyboard(keyElement);
                } else if (e.key === 'ArrowLeft' && i === 59) {
                    this.playSoundsForRealKeyboard(keyElement);
                } else if (e.key === 'ArrowRight' && i === 61) {
                    this.playSoundsForRealKeyboard(keyElement);
                }
            });

            if (i >= 0 && i <= 13) {
                keyboardItems[0].appendChild(keyElement);
            } else if (i > 13 && i <= 27) {
                keyboardItems[1].appendChild(keyElement);
            } else if (i > 27 && i <= 40) {
                keyboardItems[2].appendChild(keyElement);
            } else if (i > 40 && i <= 53) {
                keyboardItems[3].appendChild(keyElement);
            } else {
                keyboardItems[4].appendChild(keyElement);
            }

            n++;
        });


    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
            document.querySelector('textarea').selectionStart = this.properties.cursorPos;
            document.querySelector('textarea').selectionEnd = this.properties.cursorPos;
        }
    },

    playSoundsForRealKeyboard(keyElement) {
        if (this.keyLayout.eng) {
            if (keyElement.classList.contains('Enter') || keyElement.classList.contains('backspace')) {
                this.capsShiftBackEnter();
            } else {
                document.querySelector('audio.en').currentTime = 0;
                document.querySelector('audio.en').play();
            }
        } else {
            if (keyElement.classList.contains('Enter') || keyElement.classList.contains('backspace')) {
                this.capsShiftBackEnter();
            } else {
                document.querySelector('audio.ru').currentTime = 0;
                document.querySelector('audio.ru').play();
            }
        }
        document.querySelector('textarea').focus();

        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200)
    },

    _toggleCapsLock(keyElement) {
        if (this.properties.capsLock) {
            this.properties.capsLock = false;
        } else {
            this.properties.capsLock = true;
        }

        keyElement.classList.toggle('active-shift');

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    _toggleShift(keyElement) {
        if (this.shift.shift) {
            keyElement.classList.remove('active-shift');
            this.shift.shift = false;
        } else {
            keyElement.classList.add('active-shift');
            this.shift.shift = true;
        }

        if (this.properties.capsLock) {
            this.properties.capsLock = false;
        } else {
            this.properties.capsLock = true;
        }

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    capsShiftBackEnter() {
        document.querySelector('audio.other').currentTime = 0;
        document.querySelector('audio.other').play();
        document.querySelector('textarea').focus();
    },

    pointToAdd(param) {
        this.properties.cursorPos = document.querySelector('textarea').selectionStart;
        let b = param;
        let past = this.properties.value.slice(0, this.properties.cursorPos);
        let next = this.properties.value.slice(this.properties.cursorPos);
        if (b === 'backspace') {
            if (document.querySelector('textarea').selectionStart > 0) {
                this.properties.value = this.properties.value.substring(0, past.length - 1) + next;
                this.properties.cursorPos--;
            }
        } else if (b === "    ") {
            this.properties.value = past + b + next;
            this.properties.cursorPos += 4;
        } else {
            this.properties.value = past + b + next;
            this.properties.cursorPos++;
        }
    },

    positionOfArrow(arr) {
        document.querySelector('textarea').focus();
        this.properties.cursorPos = document.querySelector('textarea').selectionStart;
        if (arr === "arrow-left") {
            if (document.querySelector('textarea').selectionStart > 0) {
                this.properties.cursorPos--;
            }
        } else if (arr === "arrow-right"){
            this.properties.cursorPos++;
        } else if (arr === "arrow-back") {
            this.properties.cursorPos = 0;
        } else {
            this.properties.cursorPos = this.properties.value.length;
        }

        document.querySelector('textarea').selectionStart = this.properties.cursorPos;
        document.querySelector('textarea').selectionEnd = this.properties.cursorPos;
    },

    speakPlease(keyElement) {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        if (this.keyLayout.eng) {
            recognition.lang = 'en-US';
        } else {
            recognition.lang = 'ru-RU';
        }

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');

            if (e.results[0].isFinal) {
                document.querySelector('.use-keyboard-input').value += poopScript;
                this.properties.value += poopScript;
                document.querySelector('.use-keyboard-input').value += ' ';
                this.properties.value += ' ';
            }
        });

        recognition.addEventListener('end', () => keyElement.classList.remove('active-micro'));
        keyElement.classList.add('active-micro');
        recognition.start();
    },

    changeLang() {
        if (this.keyLayout.eng) {
            this.keyLayout.eng = false;
            this.properties.capsLock = false;
            this.shift.shift = false;
            this.elements.addEventEng++;
            this.init();
        } else {
            this.keyLayout.eng = true;
            this.properties.capsLock = false;
            this.shift.shift = false;
            this.elements.addEventRus++
            this.init();
        }
        document.querySelector('textarea').selectionStart = this.properties.cursorPos;
        document.querySelector('textarea').selectionEnd = this.properties.cursorPos;
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
        document.querySelector('textarea').blur();
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
