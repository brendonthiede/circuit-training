import {exercises} from './docs/assets/js/exercises.mjs';
import Table from 'cli-table';

let command = 'help';

if (process.argv.length > 2) {
    command = process.argv[2];
}

let args = [];
if (process.argv.length > 3) {
    args = process.argv.slice(3);
}

function usage() {
    console.log('Usage: node cli.js [command] [options]');
    console.log('Commands:');
    console.log('  help: Display help');
    console.log('  list: List all exercises');
    console.log('     -o [name|table|json]: Sets the format to display the list of exercises. Defaults to name.');
    process.exit();
}

function printTable(exercises) {
    const table = new Table({
        head: ['Title', 'Category']
    });
    exercises.sort((a, b) => {
        if (a.category < b.category || (a.category === b.category && a.title < b.title)) {
            return -1;
        } else if (a.category > b.category || (a.category === b.category && a.title > b.title)) {
            return 1;
        } else {
            return 0;
        }
    });
    exercises.forEach(exercise => {
        table.push([exercise.title, exercise.category]);
    });
    console.log(table.toString());
}

function list(args) {
    let format = 'name';
    if (args.includes('-o')) {
        let index = args.indexOf('-o');
        if (index < args.length - 1) {
            format = args[index + 1];
        }
    }

    switch (format) {
        case 'name':
            exercises.forEach(exercise => {
                console.log(exercise.title);
            });
            break;
        case 'table':
            printTable(exercises);
            break;
        case 'json':
            console.log(JSON.stringify(exercises, null, 2));
            break;
        default:
            console.log('Unknown format');
            usage();
            break;
    }
}

switch (command) {
    case 'help':
        usage();
        break;
    case 'list':
        list(args);
        break;
    default:
        console.log('Unknown command');
        usage();
        break;
}