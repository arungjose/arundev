
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { consoleContent } from "../data/consoleContent";

export default function Console() {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const outputRef = useRef(null);

    const [command, setCommand] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const { prompt, title, subtitle, welcome, commands } =
        consoleContent;

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [history]);

    function executeCommand(event) {
        event.preventDefault();

        const rawCommand = command.trim();
        if (!rawCommand) return;

        const normalized = rawCommand.toLowerCase();

        setHistory((previous) => [
            ...previous,
            { type: "command", text: rawCommand },
        ]);

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
            {
                type: "output",
                lines: response,
            },
        ]);
    }

    function handleKeyDown(event) {
        if (event.key === "ArrowUp") {
            event.preventDefault();

            const enteredCommands = history
                .filter((item) => item.type === "command")
                .map((item) => item.text);

            if (!enteredCommands.length) return;

            const nextIndex =
                historyIndex === -1
                    ? enteredCommands.length - 1
                    : Math.max(0, historyIndex - 1);

            setHistoryIndex(nextIndex);
            setCommand(enteredCommands[nextIndex]);
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();

            const enteredCommands = history
                .filter((item) => item.type === "command")
                .map((item) => item.text);

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
                    <div className="console-window-controls">
                        <button
                            className="console-window-button close"
                            type="button"
                            aria-label="Return to portfolio"
                            title="Return to portfolio"
                            onClick={() => navigate("/")}
                        />
                        <span
                            className="console-window-button minimize"
                            aria-hidden="true"
                        />
                        <span
                            className="console-window-button maximize"
                            aria-hidden="true"
                        />
                    </div>

                    <span className="console-window-title">
                        arundev — terminal
                    </span>
                    <span className="console-titlebar-spacer" />
                </header>

                <div
                    className="console-body"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="console-prompt-heading">
                        <span className="console-prompt-symbol">❯</span>
                        <span className="console-prompt-user">
                            {prompt}
                        </span>
                        <span className="console-prompt-path">-[~]</span>
                    </div>

                    <div className="console-banner">
                        <pre className="console-ascii" aria-label={title}>
                            {`    /\u005c
   /  \u005c
  / /\u005c \u005c
 / ____ \u005c
/_/    \u005c_\u005c`}
                        </pre>

                        <h1>{title}</h1>
                        <p className="console-subtitle">{subtitle}</p>
                    </div>

                    <div className="console-welcome">
                        {welcome.map((line, index) => (
                            <p key={index}>
                                {line || "\u00a0"}
                            </p>
                        ))}
                    </div>

                    <div
                        className="console-output"
                        ref={outputRef}
                        aria-live="polite"
                    >
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
