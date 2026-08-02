export type CommandResult = {
    output: string,
    systemAction?: ()=>void,
}

export const handleCommand = (
    command: string,
    _downloadResume: ()=>void
): CommandResult => {
    let cleanCmd = command.trim().toLowerCase();

    if (cleanCmd == 'h') {
        cleanCmd = 'help'
    }

    switch (cleanCmd) {
        case 'help':
            return {
                output: "Available: about | skills | projects | resume | clear"
            }
        default:
            return {
                output: `Command ${cleanCmd} unknown. Please enter [h]elp for help`
            }
    }
}