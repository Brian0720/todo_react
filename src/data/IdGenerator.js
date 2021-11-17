export default function IdGenerator() {
    let id = 4; // last id in todo.json

    return () => {
        id++;

        return id;
    };
}
