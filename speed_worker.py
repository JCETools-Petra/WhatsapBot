// speedtest_worker.js
const { parentPort } = require('worker_threads');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

// Handler saat menerima pesan dari thread utama
parentPort.on('message', async (message) => {
    if (message.command === 'runSpeedtest') {
        try {
            // Jalankan script Python. Output JSON ke stdout, pesan status ke stderr.
            const { stdout, stderr } = await execPromise('python speedtest.py');

            // Kirim hasil stdout dan stderr kembali ke thread utama
            parentPort.postMessage({ status: 'completed', stdout, stderr });

        } catch (error) {
            // Tangani error jika eksekusi python gagal
            parentPort.postMessage({ status: 'error', error: error.message, stdout: error.stdout, stderr: error.stderr });
        }
    }
});

// Beri tahu thread utama bahwa worker siap
parentPort.postMessage({ status: 'ready' });

