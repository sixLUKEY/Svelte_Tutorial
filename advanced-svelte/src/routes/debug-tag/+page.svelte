<script>
    let user = {
        firstName: 'Ada',
        lastName: 'Lovelace'
    }
</script>

<label>
    <input bind:value={user.firstName} />
    firstname
</label>

<label>
    <input bind:value={user.lastName} />
    lastname
</label>

{@debug user}

<h1>
    Hello {user.firstName}
</h1>