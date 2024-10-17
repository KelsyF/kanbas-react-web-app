
export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy Milk</li>, <li>Feed the Pets</li>];
    numberArray1.push(6);
    stringArray1.push("string3");
    todoArray.push(<li>Walk the Dogs</li>);
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
    return (
        <div id="wd-adding-removing-from-arrays">
            <h4>Add/Remove to/from Arrays</h4>
            numberArray1 = {numberArray1}
            <br/>
            stringArray1 = {stringArray1}
            <br/>
            To-do List:
            <ol>{todoArray}</ol>
            <hr/>
        </div>
    );
}