import inquirer from 'inquirer';
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstNumber',
            message: 'Enter the first number:',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'secondNumber',
            message: 'Enter the second number:',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select the operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
        },
    ]);
    switch (answers.operation) {
        case 'Add':
            console.log('Result:', answers.firstNumber + answers.secondNumber);
            break;
        case 'Subtract':
            console.log('Result:', answers.firstNumber - answers.secondNumber);
            break;
        case 'Multiply':
            console.log('Result:', answers.firstNumber * answers.secondNumber);
            break;
        case 'Divide':
            console.log('Result:', answers.firstNumber / answers.secondNumber);
            break;
        default:
            console.log('Invalid operation');
            break;
    }
}
main();
