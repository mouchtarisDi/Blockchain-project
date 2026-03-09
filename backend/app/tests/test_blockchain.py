from app.core.blockchain import Blockchain


def test_genesis_block_created():
    blockchain = Blockchain()

    assert len(blockchain.chain) == 1
    assert blockchain.chain[0].index == 0
    assert blockchain.chain[0].previous_hash == "0"


def test_add_transaction():
    blockchain = Blockchain()
    blockchain.add_transaction("Alice", "Bob", 10)

    assert len(blockchain.pending_transactions) == 1
    assert blockchain.pending_transactions[0].sender == "Alice"


def test_mine_pending_transactions():
    blockchain = Blockchain()
    blockchain.add_transaction("Alice", "Bob", 10)

    mined_block = blockchain.mine_pending_transactions("Miner1")

    assert len(blockchain.chain) == 2
    assert mined_block.index == 1
    assert len(blockchain.pending_transactions) == 0


def test_get_balance():
    blockchain = Blockchain()
    blockchain.add_transaction("SYSTEM", "Alice", 40)
    blockchain.mine_pending_transactions("Miner1")

    blockchain.add_transaction("Alice", "Bob", 15)
    blockchain.mine_pending_transactions("Miner1")

    assert blockchain.get_balance("Alice") == 25
    assert blockchain.get_balance("Bob") == 15


def test_chain_validation():
    blockchain = Blockchain()
    blockchain.add_transaction("Alice", "Bob", 10)
    blockchain.mine_pending_transactions("Miner1")

    assert blockchain.is_chain_valid() is True