const { createLogger, transports, format} = require('winston');
const { combine, label, timestamp, json, simple, colorize, printf } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
    return  `${timestamp} [${label}] ${level} : ${message}`
})

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        // colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd.SSS",
        }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )   
};

const opts = {
    file: new transports.File({
        filename: "accessWinston.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console
    })
}

const logger = createLogger({
    transports: [
        opts.file
    ],
})

if(process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}

module.exports = logger;