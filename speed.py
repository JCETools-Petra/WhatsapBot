#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Script Python untuk menjalankan tes kecepatan internet
# Menggunakan library speedtest-cli

import speedtest
import sys
import json

def run_speedtest():
    """Menjalankan tes kecepatan internet dan mengembalikan hasilnya."""
    try:
        st = speedtest.Speedtest()

        # Mendapatkan daftar server terdekat
        print("Mencari server terbaik...", file=sys.stderr)
        st.get_best_server()
        print(f"Server terbaik ditemukan: {st.results.server['sponsor']} ({st.results.server['name']}, {st.results.server['country']})", file=sys.stderr)

        # Melakukan tes download
        print("Melakukan tes download...", file=sys.stderr)
        st.download()
        print("Tes download selesai.", file=sys.stderr)

        # Melakukan tes upload
        print("Melakukan tes upload...", file=sys.stderr)
        st.upload()
        print("Tes upload selesai.", file=sys.stderr)

        # Memproses hasil
        results_dict = st.results.dict()

        return results_dict

    except speedtest.SpeedtestException as e:
        print(f"Error saat menjalankan speedtest: {e}", file=sys.stderr)
        return {"error": str(e)}
    except Exception as e:
        print(f"Terjadi kesalahan tak terduga: {e}", file=sys.stderr)
        return {"error": str(e)}

if __name__ == "__main__":
    # Jalankan tes kecepatan
    test_results = run_speedtest()

    # Cetak hasil dalam format JSON ke standard output
    # Bot Node.js akan membaca output ini
    print(json.dumps(test_results))

    # Jika Anda ingin mencetak hasil yang lebih mudah dibaca ke konsol (untuk debugging)
    # Anda bisa mencetak ke stderr, yang biasanya tidak ditangkap oleh exec di Node.js
    if "error" not in test_results:
        print("\nHasil Speedtest:", file=sys.stderr)
        print(f"Ping: {test_results['ping']:.2f} ms", file=sys.stderr)
        print(f"Download: {test_results['download'] / 10**6:.2f} Mbps", file=sys.stderr)
        print(f"Upload: {test_results['upload'] / 10**6:.2f} Mbps", file=sys.stderr)
        print(f"Server: {test_results['server']['sponsor']} ({test_results['server']['name']})", file=sys.stderr)
        if 'client' in test_results:
             print(f"Client IP: {test_results['client']['ip']}", file=sys.stderr)
    else:
        print("Speedtest gagal.", file=sys.stderr)

