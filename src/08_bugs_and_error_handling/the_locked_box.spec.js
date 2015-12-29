function withBoxUnlocked(box, body) {
    if (!box.locked)
        return body();

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }

}
