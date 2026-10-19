import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { consoleContent } from "../data/consoleContent";

/* ANSI Shadow font, built line by line so nothing needs escaping */
const ASCII_ARUN = [
    " █████╗ ██████╗ ██╗   ██╗███╗   ██╗",
    "██╔══██╗██╔══██╗██║   ██║████╗  ██║",
    "███████║██████╔╝██║   ██║██╔██╗ ██║",
    "██╔══██║██╔══██╗██║   ██║██║╚██╗██║",
    "██║  ██║██║  ██║╚██████╔╝██║ ╚████║",
    "╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝",
].join("\n");

const ASCII_DEV = [
    "██████╗ ███████╗██╗   ██╗",
    "██╔══██╗██╔════╝██║   ██║",
    "██║  ██║█████╗  ██║   ██║",
    "██║  ██║██╔══╝  ╚██╗ ██╔╝",
    "██████╔╝███████╗ ╚████╔╝ ",
    "╚═════╝ ╚══════╝  ╚═══╝  ",
].join("\n");

export default function Console() {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    const [command, setCommand] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const { prompt, welcome, commands } = consoleContent;

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Keep the newest line in view, like a real terminal
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    function executeCommand(event) {
        event.preventDefault();

        const rawCommand = command.trim();
        if (!rawCommand) return;

        const normalized = rawCommand.toLowerCase();

        setCommand("");
        setHistoryIndex(-1);

        if (normalized === "clear") {
            setHistory([]);
            return;
        }

        if (normalized === "gui") {
            navigate("/");
            return;
        }

        const result = commands[normalized];
        const response = result
            ? result.output
            : consoleContent.unknownCommand(rawCommand);

        setHistory((previous) => [
            ...previous,
            { type: "command", text: rawCommand },
            { type: "output", lines: response },
        ]);
    }

    function handleKeyDown(event) {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;

        event.preventDefault();

        const enteredCommands = history
            .filter((item) => item.type === "command")
            .map((item) => item.text);

        if (event.key === "ArrowUp") {
            if (!enteredCommands.length) return;

            const nextIndex =
                historyIndex === -1
                    ? enteredCommands.length - 1
                    : Math.max(0, historyIndex - 1);

            setHistoryIndex(nextIndex);
            setCommand(enteredCommands[nextIndex]);
        } else {
            if (historyIndex < 0) return;

            const nextIndex = historyIndex + 1;

            if (nextIndex >= enteredCommands.length) {
                setHistoryIndex(-1);
                setCommand("");
            } else {
                setHistoryIndex(nextIndex);
                setCommand(enteredCommands[nextIndex]);
            }
        }
    }

    return (
        <main className="console-page">
            <section className="console-window">
                <header className="console-titlebar">
                    <button
                        className="console-close"
                        type="button"
                        aria-label="Return to portfolio"
                        title="Return to portfolio"
                        onClick={() => navigate("/")}
                    >
                        X
                    </button>

                    <span className="console-window-title">
                        arundev — terminal
                    </span>
                </header>

                <div
                    className="console-body"
                    ref={scrollRef}
                    onClick={() => {
                        // don't steal focus while the user is selecting text
                        if (!window.getSelection()?.toString()) {
                            inputRef.current?.focus();
                        }
                    }}
                >
                    <div className="console-banner" aria-label="arun dev">
                        <pre className="console-ascii console-ascii-arun">
                            {ASCII_ARUN}
                        </pre>
                        <pre className="console-ascii console-ascii-dev">
                            {ASCII_DEV}
                        </pre>
                    </div>

                    <div className="console-welcome">
                        {welcome.map((line, index) => (
                            <p key={index}>{line || "\u00a0"}</p>
                        ))}
                    </div>

                    <div className="console-output" aria-live="polite">
                        {history.map((item, index) => (
                            <div
                                key={`${index}-${item.type}`}
                                className={`console-entry console-entry-${item.type}`}
                            >
                                {item.type === "command" ? (
                                    <div className="console-command-line">
                                        <span>$</span>
                                        <span>{item.text}</span>
                                    </div>
                                ) : (
                                    <div className="console-response">
                                        {item.lines.map((line, lineIndex) => (
                                            <p key={lineIndex}>
                                                {line || "\u00a0"}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <form
                        className="console-input-line"
                        onSubmit={executeCommand}
                    >
                        <label
                            className="console-input-prompt"
                            htmlFor="console-command"
                        >
                            $
                        </label>

                        <input
                            ref={inputRef}
                            id="console-command"
                            type="text"
                            value={command}
                            onChange={(event) => setCommand(event.target.value)}
                            onKeyDown={handleKeyDown}
                            autoComplete="off"
                            autoCapitalize="none"
                            spellCheck="false"
                            aria-label="Enter a terminal command"
                        />
                    </form>
                </div>
            </section>

            <p className="console-footer">
                BUILT BY ARUN <span>·</span> NO ROOT ACCESS REQUIRED
            </p>
        </main>
    );
}